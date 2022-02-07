import { BaseValidator } from "./BaseValidator";

export class EqualValidator extends BaseValidator {
    constructor(
        message: string | undefined,
        translate: (w: string) => string,
        private readonly compare: string,
    ) {
        super(message || translate("invalid_equal"));
    }

    validate(value: string): boolean {
        return value === this.compare;
    }
}
