import { BaseValidator } from "./BaseValidator";

export class EqualValidator extends BaseValidator {
    message = "Els camps han de coincidir";

    constructor(private readonly compare: string) {
        super();
    }

    validate(value: string): boolean {
        return value === this.compare;
    }
}
