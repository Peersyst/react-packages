import { useMemo } from "react";
import { itemIsSelected } from "../utils";

export function useSelected(
    value: unknown,
    selected: unknown | unknown[],
    multiple: boolean,
    compare?: (a: any, b: any) => boolean,
): boolean {
    return useMemo(
        () => itemIsSelected(value, selected, multiple, compare),
        [value, selected, multiple],
    );
}
