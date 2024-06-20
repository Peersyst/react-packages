import { CodeFieldProps } from "./CodeField.types";
import { useMergeDefaultProps, useTextInputValidation } from "@peersyst/react-components-core";
import { FormControlLabel } from "../FormControlLabel";
import { FormControl } from "../FormControl";
import { CodeInputs } from "./CodeInputs";

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
        hideError = true,
        showValid,
        label,
        hint,
        LabelProps = {},
        Label = FormControlLabel,
        error,
        onValidated,
        placeholder,
        onBlur,
        onFocus,
        autoCapitalize,
        ...rest
    } = props;

    const validation = useTextInputValidation(
        { minChars: [digits, ""], ...validators },
        customValidators,
    );

    return (
        <FormControl<string>
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
            error={error}
            onValidated={onValidated}
            {...rest}
        >
            {(value, setValue, context) => (
                <CodeInputs
                    type={type}
                    digits={digits}
                    gap={gap}
                    placeholder={placeholder}
                    value={value}
                    setValue={setValue}
                    context={context}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    autoCapitalize={autoCapitalize}
                />
            )}
        </FormControl>
    );
};

export default CodeField;
