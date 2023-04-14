// TODO: Move to core in pr #155

import {
    useButtonSubmit,
    useColor,
    useMergeDefaultProps,
    ParsedThemeColor,
    UseButtonSubmitResult,
} from "@peersyst/react-components-core";
import { SwipeButtonProps } from "../SwipeButton.types";

export type SwipeButtonComputedProps = {
    color: ParsedThemeColor;
} & UseButtonSubmitResult;

export type UseSwipeButtonResult = {
    props: SwipeButtonProps;
    computed: SwipeButtonComputedProps;
};

export default function useSwipeButton(rawProps: SwipeButtonProps): UseSwipeButtonResult {
    const props = useMergeDefaultProps("SwipeButton", rawProps);

    const { color: colorProp = "primary", disabled = false, loading = false, type, action } = props;

    const color = useColor(colorProp);

    const { enabled, handleSubmit } = useButtonSubmit({ disabled, loading, type, action });

    return {
        props,
        computed: {
            color,
            enabled,
            handleSubmit: type === "submit" ? handleSubmit : undefined,
        },
    };
}
