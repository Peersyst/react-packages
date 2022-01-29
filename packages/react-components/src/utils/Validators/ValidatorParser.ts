import { NumberValidator } from "./NumberValidator";
import { EmailValidator } from "./EmailValidator";
import { NotNullValidator } from "./NotNullValidator";
import { BaseValidator } from "./BaseValidator";
import { PasswordValidator } from "./PasswordValidator";
import { EqualValidator } from "./EqualValidator";

/**
 * Converts raw text validators into an array of Validator
 * example:
 * number error_message|gt0|lte1
 *
 * - number
 * - email
 * - gt + number (gt0)
 * - gte + number (gte0)
 * - eq + number (eq0)
 * - lt + number (lt0)
 * - lte + number (lte0)
 * @param rawValidators
 */
export const parseValidators = (rawValidators: string): BaseValidator[] => {
    const validators = rawValidators.split("|");
    const parsedValidators: BaseValidator[] = [];
    for (const validator of validators) {
        const validatorElements = validator.split(":");
        const validatorText: string = validatorElements[0];
        const errorText: string | undefined = validatorElements[1];
        switch (true) {
            case validatorText === "number":
                parsedValidators.push(new NumberValidator(errorText));
                break;
            case validatorText === "email":
                parsedValidators.push(new EmailValidator(errorText));
                break;
            case validatorText === "not-null":
                parsedValidators.push(new NotNullValidator(errorText));
                break;
            case validatorText === "password":
                parsedValidators.push(new PasswordValidator());
                break;
            case /eq=.+/.test(validatorText):
                parsedValidators.push(new EqualValidator(validatorText.replace("eq=", "")));
                break;
            case /gt[0-9]+/.test(validatorText):
                parsedValidators.push(
                    new NumberValidator(errorText, {
                        greaterThan: Number(validatorText.replace("gt", "")),
                    }),
                );
                break;
            case /gte[0-9]+/.test(validatorText):
                parsedValidators.push(
                    new NumberValidator(errorText, {
                        greaterEqualThan: Number(validatorText.replace("gte", "")),
                    }),
                );
                break;
            case /eq[0-9]+/.test(validatorText):
                parsedValidators.push(
                    new NumberValidator(errorText, {
                        equalThan: Number(validatorText.replace("eq", "")),
                    }),
                );
                break;
            case /lt[0-9]+/.test(validatorText):
                parsedValidators.push(
                    new NumberValidator(errorText, {
                        lowerThan: Number(validatorText.replace("lt", "")),
                    }),
                );
                break;
            case /lte[0-9]+/.test(validatorText):
                parsedValidators.push(
                    new NumberValidator(errorText, {
                        lowerEqualThan: Number(validatorText.replace("lte", "")),
                    }),
                );
                break;
        }
    }
    return parsedValidators;
};
