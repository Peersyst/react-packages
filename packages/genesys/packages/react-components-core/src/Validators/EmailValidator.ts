import { BaseValidator } from "./BaseValidator";
import { TranslateFn } from "../config";
import isEmail from "validator/lib/isEmail";

export class EmailValidator extends BaseValidator {
    constructor(message: string | undefined, translate: TranslateFn) {
        super(message || translate("invalid_email"));
    }

    validate(value: string): boolean {
        return value !== "" && isEmail(value);
    }
}
