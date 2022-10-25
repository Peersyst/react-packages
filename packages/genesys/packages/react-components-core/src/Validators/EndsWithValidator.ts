import { BaseValidator } from "./BaseValidator";
import { TranslateFn } from "../config";

export class EndsWithValidator extends BaseValidator {
    end: string;

    constructor(end: string, message: string | undefined, translate: TranslateFn) {
        super(message || translate("invalid_end", { end }));
        this.end = end;
    }

    validate(value: string): boolean {
        return !!value && value.endsWith(this.end);
    }
}
