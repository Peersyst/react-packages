import { CSSProperties } from "react";

/**
 * Generates a type that passes some styling props to be evaluated and
 * generate a style or a simple style ignoring passed props.
 */
export type PropsStyle<Props> = ((props: Props) => CSSProperties) | CSSProperties;

/**
 * Generate a set of string literal types with the given default record `T` and
 * override record `U`.
 *
 * If the property value was `true`, the property key will be added to the
 * string union.
 */
export type OverridableStringUnion<
    T extends string | number,
    U = Record<string, any>,
> = GenerateStringUnion<Overwrite<Record<T, true>, U>>;

/**
 * Like `T & U`, but using the value types from `U` where their properties overlap.
 */
export type Overwrite<T, U> = DistributiveOmit<T, keyof U> & U;

type GenerateStringUnion<T> = Extract<
    {
        [Key in keyof T]: true extends T[Key] ? Key : never;
    }[keyof T],
    string
>;

/**
 * Remove properties `K` from `T`.
 * Distributive for union types.
 */
export type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;

/**
 * Creates a type with common properties of A and B
 */
export type Common<A, B> = Pick<
    A,
    {
        [K in keyof A & keyof B]: A[K] extends B[K] ? (B[K] extends A[K] ? K : never) : never;
    }[keyof A & keyof B]
>;

/**
 * Creates a type with the difference between A and B
 */
export type Difference<A, B> = Omit<A, keyof B>;

/**
 * Makes all properties, included nested ones, partial
 */
type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends (infer U)[]
        ? DeepPartial<U>[]
        : T[P] extends object
        ? DeepPartial<T[P]>
        : T[P];
};

/**
 * Makes all properties, included nested ones, partial. Except those of type K
 */
type DeepPartialExcept<T, K extends keyof T> = RecursivePartial<T> & Pick<T, K>;

/**
 * Makes properties of type K required
 */
type Demand<T, K extends keyof T> = T & { [P in K]-?: T[P] };

/**
 * Makes properties of type K optional
 */
type Loosen<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * Makes properties of type K optional deeply
 */
type LoosenDeeply<T, K extends keyof T> = Omit<T, K> & DeepPartial<Pick<T, K>>;

/**
 * Gets all keys with type undefined of T
 */
type UndefinedKeys<T> = {
    [K in keyof T]: T[K] extends undefined ? K : never;
}[keyof T];

/**
 * Removes properties of type undefined from T
 */
type Defined<T> = Omit<T, UndefinedKeys<T>>;
