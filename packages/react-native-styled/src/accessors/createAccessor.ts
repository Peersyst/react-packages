import { Accessor, AccessorFn } from "./accessors.types";

export default function createAccessor(fn: AccessorFn): Accessor {
    (fn as Accessor).isStyledAccessor = true;
    return fn as Accessor;
}
