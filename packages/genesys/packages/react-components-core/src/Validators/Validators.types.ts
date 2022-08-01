import { BaseValidator } from "./BaseValidator";
import { TranslateFn } from "../config";

export interface IValidator {
    new (message: string | undefined, translate: TranslateFn, value?: any): BaseValidator;
}

export type Validator<TVal = true> = TVal | [TVal, string];

export interface Validators {
    number?: Validator;
    email?: Validator;
    password?: Validator;
    eq?: Validator<any>;
    gt?: Validator<number>;
    gte?: Validator<number>;
    lt?: Validator<number>;
    lte?: Validator<number>;
    minChars?: Validator<number>;
    maxChars?: Validator<number>;
    startsWith?: Validator<string>;
    endsWith?: Validator<string>;
}

export interface FunctionalValidator {
    validate: (value: any) => boolean;
    message: string;
}

export type CustomValidators = (BaseValidator | FunctionalValidator)[] | undefined;

export type ValidatorKey =
    | "invalid_required"
    | "invalid_not_null"
    | "invalid_number"
    | "invalid_email"
    | "invalid_password"
    | "invalid_equal"
    | "invalid_number_gt"
    | "invalid_number_gte"
    | "invalid_number_eq"
    | "invalid_number_lt"
    | "invalid_number_lte"
    | "insufficient_chars"
    | "too_many_chars"
    | "invalid_start"
    | "invalid_end";
