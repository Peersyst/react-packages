import { useEffect, useMemo, useState } from "react";
import { useTheme } from "../../Theme";
import { CustomValidators, Validators } from "../Validators";
import validatorParser from "../Validators/validatorParser";

export interface TextInputValidationResult {
    valid: boolean;
    errors: string[];
}

export function useTextInputValidation(
    value: string,
    rawValidators?: Validators,
    customValidators?: CustomValidators,
    onInvalid?: (errors: string[]) => any,
): TextInputValidationResult {
    const [valid, setValid] = useState<boolean>(true);
    const [errors, setErrors] = useState<string[]>([]);

    const {
        theme: { translate, validators: extraValidators },
    } = useTheme();

    const validators = useMemo(
        () =>
            validatorParser(rawValidators || {}, extraValidators, translate).concat(
                customValidators || [],
            ),
        [rawValidators, customValidators, translate],
    );

    useEffect(() => {
        const newErrors: string[] = [];

        for (const validator of validators) {
            const valid = validator.validate(value);
            if (!valid) newErrors.push(validator.message);
        }

        const invalid = newErrors.length > 0;
        setValid(!invalid);
        setErrors(newErrors);

        if (invalid) onInvalid?.(newErrors);
    }, [value, onInvalid]);

    return { valid, errors };
}
