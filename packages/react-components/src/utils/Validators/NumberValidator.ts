import { BaseValidator } from "./BaseValidator";

export interface NumberValidatorOptions {
    greaterThan?: number;
    greaterEqualThan?: number;
    equalThan?: number;
    lowerThan?: number;
    lowerEqualThan?: number;
}

export class NumberValidator extends BaseValidator {
    private readonly options: NumberValidatorOptions = {};

    constructor(message?: string | undefined, options: NumberValidatorOptions = {}) {
        super(message || "Value must be a number");

        this.options = options;

        if (!message) {
            if (options.greaterThan !== undefined) {
                this.message = "The number must be greater than " + options.greaterThan;
            }
            if (options.greaterEqualThan !== undefined) {
                this.message = "The number must be greater or equal than " + options.greaterEqualThan;
            }
            if (options.equalThan !== undefined) {
                this.message = "The number must be equal than " + options.equalThan;
            }
            if (options.lowerThan !== undefined) {
                this.message = "The number must be lower than " + options.lowerThan;
            }
            if (options.lowerEqualThan !== undefined) {
                this.message = "The number must be lower or equal than " + options.lowerEqualThan;
            }
        }
    }

    validate(value: string): boolean {
        const parsed = Number(value);
        if (isNaN(parsed)) return false;
        else if (value === "") return true;
        let valid = true;
        if (this.options.greaterThan !== undefined) {
            const stepValid = parsed > this.options.greaterThan;
            valid = valid && stepValid;
        }
        if (this.options.greaterEqualThan !== undefined) {
            const stepValid = parsed >= this.options.greaterEqualThan;
            valid = valid && stepValid;
        }
        if (this.options.equalThan !== undefined) {
            const stepValid = parsed === this.options.equalThan;
            valid = valid && stepValid;
        }
        if (this.options.lowerThan !== undefined) {
            const stepValid = parsed < this.options.lowerThan;
            valid = valid && stepValid;
        }
        if (this.options.lowerEqualThan !== undefined) {
            const stepValid = parsed <= this.options.lowerEqualThan;
            valid = valid && stepValid;
        }
        return valid;
    }
}
