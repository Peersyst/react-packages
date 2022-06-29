import { ChangeEvent, createRef, useState } from "react";
import { Row } from "../Row";
import { useTextInputValidation } from "./hooks/useTextInputValidation";
import { Children, HTMLInput, TextInputProps, TextInputStyles } from "./TextInput.types";
import { ErrorElementWrapper, TextInputRoot, ValidElementWrapper } from "./TextInput.styles";
import { cx } from "@peersyst/react-utils";
import { useTheme } from "../Theme";
import { FormControl } from "../FormControl";
import { FormControlLabel } from "../FormControlLabel";

export default function TextInput<HTMLT extends HTMLInput>({
    defaultValue = "",
    disabled = false,
    readonly = false,
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
    children,
    errorElement: errorElementProp,
    validElement: validElementProp,
    LabelProps = {},
    Label = FormControlLabel,
    ...rest
}: TextInputProps & Children<HTMLT>): JSX.Element {
    const [focused, setFocused] = useState<boolean>(false);
    const [active, setActive] = useState<boolean>(false);
    const validation = useTextInputValidation(validators, customValidators);
    const {
        theme: {
            icons: { invalid: Invalid, valid: Valid },
        },
    } = useTheme();
    const errorElement = errorElementProp === true ? <Invalid /> : errorElementProp ?? <Invalid />;
    const validElement = validElementProp || <Valid />;

    const ref = createRef<HTMLT>();

    return (
        <FormControl<string>
            Label={[Label, LabelProps]}
            defaultValue={defaultValue}
            disabled={disabled}
            readonly={readonly}
            validation={validation}
            {...rest}
        >
            {(value, setValue, { invalid, valid }) => {
                const handleChange = (e: ChangeEvent<HTMLT>) => {
                    const newValue = e.currentTarget.value;
                    setValue(newValue);
                };

                const wrapperStyleProps: TextInputStyles = {
                    invalid,
                    valid,
                    focused,
                    active,
                    disabled,
                    readonly,
                };

                return (
                    <TextInputRoot
                        className={cx(
                            "TextInput",
                            focused && "Focused",
                            active && "Active",
                            invalid && "Invalid",
                            valid && "Valid",
                            disabled && "Disabled",
                            readonly && "Readonly",
                        )}
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
                            {valid && <ValidElementWrapper>{validElement}</ValidElementWrapper>}
                            {invalid && errorElement && (
                                <ErrorElementWrapper>{errorElement}</ErrorElementWrapper>
                            )}
                        </Row>
                    </TextInputRoot>
                );
            }}
        </FormControl>
    );
}
