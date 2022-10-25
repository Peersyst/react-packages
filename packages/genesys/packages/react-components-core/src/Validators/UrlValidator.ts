import { BaseValidator } from "./BaseValidator";
import { TranslateFn } from "../config";
import validator from "validator";

export class UrlValidator extends BaseValidator {
    constructor(message: string | undefined, translate: TranslateFn) {
        super(message || translate("invalid_url"));
    }

    validate(value: string): boolean {
        return !!value && validator.isURL(value);
    }
}
