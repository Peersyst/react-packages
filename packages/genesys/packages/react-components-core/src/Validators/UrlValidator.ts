import { BaseValidator } from "./BaseValidator";
import { TranslateFn } from "../config";
import isUrl from "validator/lib/isUrl";

export class UrlValidator extends BaseValidator {
    constructor(message: string | undefined, translate: TranslateFn) {
        super(message || translate("invalid_url"));
    }

    validate(value: string): boolean {
        return value !== "" && isUrl(value);
    }
}
