import { ChangeEvent, createRef, useEffect, useState } from "react";
import { Row } from "../Row";
import { useTextInputValidation } from "./hooks/useTextInputValidation";
import { useFormNotification } from "../Form";
import { Children, HTMLInput, TextInputProps, TextInputStyles } from "./TextInput.types";
import { Popover } from "../Popover";
import {
    ErrorElementWrapper,
    InputErrors,
    TextInputRoot,
    ValidElementWrapper,
} from "./TextInput.styles";
import { useControlled } from "@peersyst/react-hooks";
import { fsx, cx } from "@peersyst/react-utils";
import { useTheme } from "../Theme";

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
    showValid: showValidProp = false,
    validElement: validElementProp,
}: TextInputProps & Children<HTMLT>): JSX.Element {
    const [value, setValue] = useControlled(defaultValue, valueProp, onChange);
    const [modified, setModified] = useState(false);

    const [focused, setFocused] = useState<boolean>(false);
    const [active, setActive] = useState<boolean>(false);

    const { valid, errors } = useTextInputValidation(
        value,
        validators,
        customValidators,
        modified ? onInvalid : undefined,
    );
    useFormNotification(name, value, valid);

    const invalid = modified && !valid;
    const showValid = modified && valid && showValidProp;
    const wrapperStyleProps: TextInputStyles = {
        invalid,
        showValid,
        focused,
        active,
        disabled,
        readonly,
    };

    useEffect(() => {
        !modified && value !== "" && setModified(true);
    }, [modified, value]);

    const ref = createRef<HTMLT>();

    const handleChange = (e: ChangeEvent<HTMLT>) => {
        const newValue = e.currentTarget.value;
        setValue(newValue);
        onChange?.(newValue);
    };

    const {
        theme: {
            icons: { invalid: Invalid, valid: Valid },
        },
    } = useTheme();
    const errorElement = errorElementProp || <Invalid />;
    const validElement = validElementProp || <Valid />;

    return (
        <TextInputRoot
            className={cx(
                className,
                "TextInput",
                invalid && "Invalid",
                showValid && "Valid",
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
                {!invalid ? (
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
                        <Popover.Content>
                            {<ErrorElementWrapper>{errorElement}</ErrorElementWrapper>}
                        </Popover.Content>
                    </Popover>
                )}
            </Row>
        </TextInputRoot>
    );
}
