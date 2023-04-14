import { useComputeStyles } from "../../../hooks";
import { SelectorGroupProps } from "../SelectorGroup.types";
import { SelectorDirection } from "@peersyst/react-components-core";

export default function useSelectorGroupStyles<
    T,
    Multiple extends boolean = false,
    D extends SelectorDirection = "column",
>(props: SelectorGroupProps<T, Multiple, D>): SelectorGroupProps<T, Multiple, D>["style"] {
    return useComputeStyles("SelectorGroup", props, undefined, { bypass: true });
}
