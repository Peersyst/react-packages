import { useMemo } from "react";
import { CustomValidators, validatorParser, Validators } from "../../Validators";
import { useAllConfig } from "../../config";

export function useTextInputValidation(
    rawValidators?: Validators,
    customValidators?: CustomValidators,
): (value: string) => [boolean, string | undefined] {
    const { translate, validators: extraValidators } = useAllConfig();

    const validators = useMemo(
        () =>
            validatorParser(rawValidators || {}, extraValidators, translate).concat(
                customValidators || [],
            ),
        [rawValidators, customValidators, translate],
    );

    return (value) => {
        for (const validator of validators) {
            if (!validator.validate(value)) return [false, validator.message];
        }
        return [true, undefined];
    };
}
