import { BaseValidator } from "../../utils/Validators/BaseValidator";
import { parseValidators } from "../../utils/Validators/ValidatorParser";
import { FunctionalValidator } from "../TextInput.types";

export type CustomValidators = (BaseValidator | FunctionalValidator)[] | undefined;

export function getValidators(validators = "", customValidators: CustomValidators = []): BaseValidator[] {
    return parseValidators(validators).concat(customValidators);
}
