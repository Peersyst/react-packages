import { BaseValidator } from "./BaseValidator";
import { TranslateFn } from "../config";

export class NotNullValidator extends BaseValidator {
    constructor(message: string | undefined, translate: TranslateFn) {
        super(message || translate("invalid_not_null"));
    }

    validate(value: string): boolean {
        return !!value;
    }
}
