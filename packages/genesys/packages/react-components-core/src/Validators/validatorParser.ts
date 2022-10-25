import { IValidator, Validator, Validators } from "./Validators.types";
import { TranslateFn, ExtraValidators } from "../config";
import { BaseValidator } from "./BaseValidator";
import { NumberValidator } from "./NumberValidator";
import { EmailValidator } from "./EmailValidator";
import { PasswordValidator } from "./PasswordValidator";
import { EqualValidator } from "./EqualValidator";
import { MinCharsValidator } from "./MinCharsValidator";
import { MaxCharsValidator } from "./MaxCharsValidator";
import { StartsWithValidator } from "./StartsWithValidator";
import { EndsWithValidator } from "./EndsWithValidator";
import { ColorValidator } from "./ColorValidator";
import { UrlValidator } from "./UrlValidator";

export const parseValidator = (
    validator: keyof Validators & keyof ExtraValidators,
    param: Validator<unknown>,
    extraValidators: Record<keyof ExtraValidators, IValidator>,
    translate: TranslateFn,
): BaseValidator => {
    const [value, message] = Array.isArray(param) ? param : [param, undefined];

    switch (validator) {
        case "number":
            return new NumberValidator(message, translate);
        case "email":
            return new EmailValidator(message, translate);
        case "password":
            return new PasswordValidator(message, translate);
        case "eq":
            return new EqualValidator(message, translate, value);
        case "gt":
            return new NumberValidator(message, translate, { greaterThan: value });
        case "gte":
            return new NumberValidator(message, translate, { greaterEqualThan: value });
        case "lt":
            return new NumberValidator(message, translate, { lowerThan: value });
        case "lte":
            return new NumberValidator(message, translate, { lowerEqualThan: value });
        case "minChars":
            return new MinCharsValidator(value, message, translate);
        case "maxChars":
            return new MaxCharsValidator(value, message, translate);
        case "startsWith":
            return new StartsWithValidator(value, message, translate);
        case "endsWith":
            return new EndsWithValidator(value, message, translate);
        case "color":
            return new ColorValidator(value, message, translate);
        case "url":
            return new UrlValidator(message, translate);
        default:
            return new (extraValidators[validator] as IValidator)(message, translate, value);
    }
};

export default function (
    validators: Validators & Partial<ExtraValidators>,
    extraValidators: Record<keyof ExtraValidators, IValidator>,
    translate: TranslateFn,
): BaseValidator[] {
    return Object.entries(validators).map(([key, param]) =>
        parseValidator(
            key as keyof Validators & keyof ExtraValidators,
            param,
            extraValidators,
            translate,
        ),
    );
}
