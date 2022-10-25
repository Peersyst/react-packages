import { BaseValidator } from "./BaseValidator";
import { TranslateFn } from "../config";

export class PasswordValidator extends BaseValidator {
    constructor(message: string | undefined, translate: TranslateFn) {
        super(message || translate("invalid_password"));
    }

    validate(value: string): boolean {
        if (!value) return true;
        const regex = /(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).*/g;
        return regex.test(value);
    }
}
