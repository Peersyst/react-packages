import { BaseValidator } from "./BaseValidator";

export class EmailValidator extends BaseValidator {
    constructor(message?: string | undefined) {
        super(message || "Email is not valid");
    }

    validate(value: string): boolean {
        const emailRegex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(value);
    }
}
