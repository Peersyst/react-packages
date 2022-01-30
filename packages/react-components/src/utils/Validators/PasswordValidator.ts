import { BaseValidator } from "./BaseValidator";

export class PasswordValidator extends BaseValidator {
    message =
        "Password must contain 8 characters, a lowercase, an uppsercase and a special character";

    validate(value: string): boolean {
        const regex = /(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).*/g;
        return regex.test(value);
    }
}
