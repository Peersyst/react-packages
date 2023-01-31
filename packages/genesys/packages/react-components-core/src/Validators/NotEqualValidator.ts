import { BaseValidator } from "./BaseValidator";
import { TranslateFn } from "../config";

export class NotEqualValidator extends BaseValidator {
    private readonly compare: string;

    constructor(message: string | undefined, translate: TranslateFn, compare: string) {
        super(message || translate("invalid_not_equal"));
        this.compare = compare;
    }

    validate(value: string): boolean {
        return value !== this.compare;
    }
}
