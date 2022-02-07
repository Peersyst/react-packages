import { BaseValidator } from "./BaseValidator";

export class PasswordValidator extends BaseValidator {
    constructor(message: string | undefined, translate: (w: string) => string) {
        super(message || translate("invalid_password"));
    }

    validate(value: string): boolean {
        const regex = /(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).*/g;
        return regex.test(value);
    }
}
