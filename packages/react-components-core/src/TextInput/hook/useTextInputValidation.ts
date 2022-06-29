import { useMemo } from "react";
import { ExtraValidators, TranslateFn } from "../../Theme";
import { CustomValidators, ValidatorFactory, validatorParser, Validators } from "../../Validators";

export function useTextInputValidation(
    translate: TranslateFn,
    extraValidators: Record<keyof ExtraValidators, ValidatorFactory<unknown>>,
    rawValidators?: Validators,
    customValidators?: CustomValidators,
): (value: string) => [boolean, string | undefined] {
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
