import React, { ChangeEvent, createRef, useState } from "react";
import { Row } from "../Row";
import { useTextInputValidation } from "./hooks/useTextInputValidation";
import { useFormNotification } from "../Form";
import { Children, HTMLInput, TextInputProps, TextInputStyles } from "./TextInput.types";
import { Popover } from "../Popover";
import { ErrorElementWrapper, InputErrors, TextInputRoot, ValidElementWrapper } from "./TextInput.styles";
import { useControlled } from "../hooks";
import { fsx } from "../utils/fsx";
import { useTheme } from "../Theme";
import { cx } from "../utils/cx";

export default function TextInput<HTMLT extends HTMLInput>({
    defaultValue = "",
    value: valueProp,
    onChange,
    disabled = false,
    readonly = false,
    className,
    style,
    placeholder,
    prefix,
    suffix,
    selectOnFocus,
    autoFocus,
    autoCapitalize,
    autoComplete,
    autoCorrect,
    spellCheck,
    maxLength,
    onSubmit,
    validators,
    customValidators,
    onInvalid,
    name,
    children,
    errorElement: errorElementProp,
    showValid = false,
    validElement: validElementProp,
}: TextInputProps & Children<HTMLT>): JSX.Element {
    const [value, setValue] = useControlled(defaultValue, valueProp, onChange);

    const [focused, setFocused] = useState<boolean>(false);
    const [active, setActive] = useState<boolean>(false);

    const { valid, errors } = useTextInputValidation(value, validators, customValidators, onInvalid);
    useFormNotification(name, value, valid);

    const ref = createRef<HTMLT>();

    const handleChange = (e: ChangeEvent<HTMLT>) => {
        const newValue = e.currentTarget.value;
        setValue(newValue);
        onChange?.(newValue);
    };

    const wrapperStyleProps: TextInputStyles = {
        invalid: !valid,
        showValid,
        focused,
        active,
        disabled,
        readonly,
    };

    const {
        theme: {
            icons: { info: Info, success: Success },
        },
    } = useTheme();
    const errorElement = errorElementProp || <Info />;
    const validElement = validElementProp || <Success />;

    return (
        <TextInputRoot
            className={cx(
                className,
                "TextInput",
                !valid && "Invalid",
                focused && "Focused",
                active && "Active",
                disabled && "Disabled",
                readonly && "Readonly",
            )}
            style={fsx(style, wrapperStyleProps)}
            onMouseDown={() => setActive(true)}
            onMouseUp={() => setActive(false)}
            onClick={() => ref.current?.focus()}
            {...wrapperStyleProps}
        >
            <Row alignItems="center" gap={8} flex={1}>
                {prefix}
                {children({
                    ref,
                    value,
                    setValue,
                    placeholder,
                    onChange: handleChange,
                    disabled,
                    onFocus: () => {
                        setFocused(true);
                        if (selectOnFocus) ref.current?.select();
                    },
                    onBlur: () => setFocused(false),
                    readOnly: readonly,
                    autoFocus,
                    autoComplete: autoComplete ? "on" : "off",
                    autoCorrect: autoCorrect ? "on" : "off",
                    autoCapitalize: autoCapitalize ? "on" : "off",
                    spellCheck,
                    maxLength,
                    onSubmit,
                })}
                {suffix}
                {valid ? (
                    showValid && <ValidElementWrapper>{validElement}</ValidElementWrapper>
                ) : (
                    <Popover>
                        <Popover.Popper>
                            <InputErrors>
                                {errors.map((e, i) => (
                                    <p key={i.toString()}>{e}</p>
                                ))}
                            </InputErrors>
                        </Popover.Popper>
                        <Popover.Content>{<ErrorElementWrapper>{errorElement}</ErrorElementWrapper>}</Popover.Content>
                    </Popover>
                )}
            </Row>
        </TextInputRoot>
    );
}
