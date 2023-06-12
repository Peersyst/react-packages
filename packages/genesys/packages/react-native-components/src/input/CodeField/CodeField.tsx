import { CodeFieldProps, CodeFieldStyle } from "./CodeField.types";
import { useMergeDefaultProps, useTextInputValidation } from "@peersyst/react-components-core";
import { FormControlLabel, FormControlLabelStyle } from "../FormControlLabel";
import { FormControl } from "../FormControl";
import { CodeInputs } from "./CodeInputs";
import { useCodeFieldStyles } from "./hooks";

const CodeField = (rawProps: CodeFieldProps) => {
    const props = useMergeDefaultProps("CodeField", rawProps);

    const {
        type,
        digits,
        gap,
        name,
        defaultValue = "",
        value: valueProp,
        onChange,
        validators = [],
        customValidators = [],
        disabled,
        readonly,
        required,
        onFocus,
        onBlur,
        hideError = true,
        showValid,
        label,
        hint,
        LabelProps = {},
        Label = FormControlLabel,
        error,
        onValidated,
        placeholder,
        style: _style,
    } = props;

    const style = useCodeFieldStyles(props);

    const validation = useTextInputValidation(
        { minChars: [digits, ""], ...validators },
        customValidators,
    );

    return (
        <FormControl<string, FormControlLabelStyle, CodeFieldStyle>
            name={name}
            label={label}
            Label={[Label, LabelProps]}
            hint={hint}
            defaultValue={defaultValue}
            value={valueProp}
            onChange={onChange}
            disabled={disabled}
            readonly={readonly}
            required={required}
            validation={validation}
            hideError={hideError}
            showValid={showValid}
            style={style}
            error={error}
            onValidated={onValidated}
        >
            {(value, setValue, context, style, setFocused) => (
                <CodeInputs
                    type={type}
                    digits={digits}
                    gap={gap}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    placeholder={placeholder}
                    value={value}
                    setValue={setValue}
                    context={context}
                    style={style}
                    setFocused={setFocused}
                />
            )}
        </FormControl>
    );
};

export default CodeField;
