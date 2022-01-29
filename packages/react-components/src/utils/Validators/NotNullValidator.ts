import { BaseValidator } from "./BaseValidator";

export class NotNullValidator extends BaseValidator {
    constructor(message?: string | undefined) {
        super(message || "This field is required");
    }

    validate(value: string): boolean {
        return value !== "";
    }
}
