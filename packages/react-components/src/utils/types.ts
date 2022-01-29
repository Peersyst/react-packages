import { CSSProperties } from "react";

export type PropsStyle<Props> = ((props: Props) => CSSProperties) | CSSProperties;

/**
 * Generate a set of string literal types with the given default record `T` and
 * override record `U`.
 *
 * If the property value was `true`, the property key will be added to the
 * string union.
 */
export type OverridableStringUnion<T extends string | number, U = {}> = GenerateStringUnion<Overwrite<Record<T, true>, U>>;

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
 * Make all properties of "T" accept undefined
 */
export type MakeNullable<T, K extends keyof T> = Omit<T, K> & Record<K, T[K] | undefined>;
export type MakeAllNullable<T> = { [Key in keyof T]: MakeNullable<T, Key> }[keyof T];
