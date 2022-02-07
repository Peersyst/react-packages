import { BaseValidator } from "./BaseValidator";

export class NotNullValidator extends BaseValidator {
    constructor(message: string | undefined, translate: (w: string) => string) {
        super(message || translate("invalid_not_null"));
    }

    validate(value: string): boolean {
        return value !== "";
    }
}
