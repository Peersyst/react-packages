import { BaseValidator } from "./BaseValidator";
import { TranslateFn } from "../config";

export class EqualValidator extends BaseValidator {
    private readonly compare: string;

    constructor(message: string | undefined, translate: TranslateFn, compare: string) {
        super(message || translate("invalid_equal"));
        this.compare = compare;
    }

    validate(value: string): boolean {
        if (!value) return true;
        return value === this.compare;
    }
}
