import { FormControlProps } from "./FormControl.types";
import { useFormControlled } from "./hook";
import { useEffect, useState } from "react";
import { useFormNotification } from "../Form";
import FormControlContext from "./FormControlContext";
import useTranslate from "../config/hook/useTranslate";

function FormControl<T = any>({
    name,
    defaultValue,
    value: valueProp,
    onChange,
    validation,
    required = false,
    disabled = false,
    readonly = false,
    hideError = false,
    showValid = false,
    onValidated,
    children,
}: FormControlProps<T>): JSX.Element {
    const translate = useTranslate();
    const {
        state: [value, setValue],
        modified,
    } = useFormControlled(defaultValue, valueProp, onChange);
    const [invalid, setInvalid] = useState(false);
    const [focused, setFocused] = useState(false);
    const [error, setError] = useState<string | undefined>();
    useFormNotification(name, value, !invalid);

    useEffect(() => {
        let isValueInvalid: boolean;
        let errorMsg: string | undefined;
        if (required && !value) {
            isValueInvalid = true;
            errorMsg = translate("invalid_required");
        } else if (validation) {
            const [validationResult, validationError] = validation(value);
            if (!validationResult) {
                isValueInvalid = true;
                errorMsg = validationError;
            } else {
                isValueInvalid = false;
                errorMsg = undefined;
            }
        } else {
            isValueInvalid = false;
            errorMsg = undefined;
        }
        setInvalid(isValueInvalid);
        setError(errorMsg);
        if (modified) onValidated?.(isValueInvalid, errorMsg);
    }, [value, required, validation, modified]);

    const isInvalid = !hideError && modified && invalid;
    const isValid = showValid && !isInvalid && modified;

    return (
        <FormControlContext.Provider
            value={{
                required,
                invalid: isInvalid,
                valid: isValid,
                disabled,
                readonly,
                focused,
            }}
        >
            {children(
                value,
                (val) => {
                    if (!disabled && !readonly) setValue(val);
                },
                setFocused,
                !modified || hideError ? undefined : error,
            )}
        </FormControlContext.Provider>
    );
}

export default FormControl;
