import { Accessor, AccessorFn } from "./accessors.types";

/**
 * Accessors are used to access certain values at load time, such as the current color or the theme
 * @param fn The accessor function
 * @returns The accessor function with a flag to indicate that it is an accessor
 */
export default function createAccessor(fn: AccessorFn): Accessor {
    (fn as Accessor).isStyledAccessor = true;
    return fn as Accessor;
}
