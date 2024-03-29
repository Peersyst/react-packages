import { BaseValidator } from "./BaseValidator";
import { TranslateFn } from "../config";

export class MinCharsValidator extends BaseValidator {
    chars: number;

    constructor(chars: number, message: string | undefined, translate: TranslateFn) {
        super(message ?? translate("insufficient_chars", { chars: chars.toString() }));
        this.chars = chars;
    }

    validate(value: string): boolean {
        if (!value) return true;
        return value.length >= this.chars;
    }
}
