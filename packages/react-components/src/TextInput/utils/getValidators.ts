import { FunctionalValidator } from "../TextInput.types";
import { BaseValidator } from "./Validators/BaseValidator";
import { parseValidators } from "./ValidatorParser";

export type CustomValidators = (BaseValidator | FunctionalValidator)[] | undefined;

export function getValidators(
    validators = "",
    customValidators: CustomValidators = [],
    translate: (w: string) => string,
): BaseValidator[] {
    return parseValidators(validators, translate).concat(customValidators);
}
