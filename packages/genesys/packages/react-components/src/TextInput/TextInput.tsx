import { ChangeEvent, createRef, useState } from "react";
import { Row } from "../Row";
import { Children, HTMLInput, TextInputProps, TextInputStyles } from "./TextInput.types";
import { ErrorElementWrapper, TextInputRoot, ValidElementWrapper } from "./TextInput.styles";
import { cx } from "@peersyst/react-utils";
import { useTheme } from "../theme";
import { FormControl } from "../FormControl";
import { FormControlLabel } from "../FormControlLabel";
import { useMergeDefaultProps, useTextInputValidation } from "@peersyst/react-components-core";

export default function TextInput<HTMLT extends HTMLInput>(
    props: TextInputProps & Children<HTMLT>,
): JSX.Element {
    const {
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
        format = (x: string) => x,
        parse = (x: string) => x,
        onKeyDown,
        onBlur,
        onFocus,
        onPaste,
        ...rest
    } = useMergeDefaultProps("TextInput", props);

    const [active, setActive] = useState<boolean>(false);
    const validation = useTextInputValidation(validators, customValidators);
    const {
        icons: { invalid: Invalid, valid: Valid },
    } = useTheme();
    const errorElement = errorElementProp === true ? <Invalid /> : errorElementProp ?? <Invalid />;
    const validElement = validElementProp === true ? <Valid /> : validElementProp ?? <Valid />;

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
            {(value, setValue, { invalid, valid, focused, setFocused }) => {
                const handleChange = (e: ChangeEvent<HTMLT>) => {
                    const newValue = e.currentTarget.value;
                    setValue(parse(newValue, value));
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
                                value: format(value),
                                setValue,
                                placeholder,
                                onChange: handleChange,
                                disabled,
                                onFocus: () => {
                                    setFocused(true);
                                    onFocus?.();
                                    if (selectOnFocus) ref.current?.select();
                                },
                                onBlur: () => {
                                    setFocused(false);
                                    onBlur?.();
                                },
                                readOnly: readonly,
                                autoFocus,
                                autoComplete: autoComplete ? "on" : "off",
                                autoCorrect: autoCorrect ? "on" : "off",
                                autoCapitalize: autoCapitalize ? "on" : "off",
                                spellCheck,
                                maxLength,
                                onSubmit,
                                onKeyDown,
                                onPaste,
                            })}
                            {suffix}
                            {valid && validElement && (
                                <ValidElementWrapper>{validElement}</ValidElementWrapper>
                            )}
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
