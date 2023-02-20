// TODO: Move to core in pr #155

import {
    useButtonSubmit,
    useColor,
    useMergeDefaultProps,
    WithParsedThemeColor,
} from "@peersyst/react-components-core";
import { UseButtonSubmitResult } from "@peersyst/react-components-core/src/Button/hooks/useButtonSubmit";
import { SwipeButtonProps } from "../SwipeButton.types";

export type UseSwipeButtonResult = WithParsedThemeColor<SwipeButtonProps> & UseButtonSubmitResult;

export default function useSwipeButton(props: SwipeButtonProps): UseSwipeButtonResult {
    const {
        color: colorProp = "primary",
        disabled = false,
        loading = false,
        type,
        action,
        ...rest
    } = useMergeDefaultProps("SwipeButton", props);

    const color = useColor(colorProp);

    const { enabled, handleSubmit } = useButtonSubmit({ disabled, loading, type, action });

    return {
        color,
        enabled,
        handleSubmit: type === "submit" ? handleSubmit : undefined,
        disabled,
        loading,
        type,
        ...rest,
    };
}
