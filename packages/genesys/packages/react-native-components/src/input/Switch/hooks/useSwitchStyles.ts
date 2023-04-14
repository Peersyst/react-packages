import { useComputeStyles } from "../../../hooks";
import { SwitchProps } from "../Switch.types";

export default function useSwitchStyles(props: SwitchProps): SwitchProps["style"] {
    return useComputeStyles("Switch", props, undefined, { bypass: true });
}
