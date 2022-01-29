export abstract class BaseValidator {
    message = "";

    constructor(message?: string | undefined) {
        if (message) this.message = message;
    }

    abstract validate(value: any): boolean;
}
