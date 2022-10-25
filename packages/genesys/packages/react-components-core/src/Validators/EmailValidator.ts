import { BaseValidator } from "./BaseValidator";
import { TranslateFn } from "../config";
import validator from "validator";

export class EmailValidator extends BaseValidator {
    constructor(message: string | undefined, translate: TranslateFn) {
        super(message || translate("invalid_email"));
    }

    validate(value: string): boolean {
        return !!value && validator.isEmail(value);
    }
}
