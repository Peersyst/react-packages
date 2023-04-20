import { BaseValidator } from "./BaseValidator";
import { TranslateFn } from "../config";

export class StartsWithValidator extends BaseValidator {
    start: string;

    constructor(start: string, message: string | undefined, translate: TranslateFn) {
        super(message ?? translate("invalid_start", { start }));
        this.start = start;
    }

    validate(value: string): boolean {
        if (!value) return true;
        return value.startsWith(this.start);
    }
}
