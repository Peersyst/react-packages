// TODO: Remove in pr #155

import {
    useButtonSubmit,
    useColor,
    useMergeDefaultProps,
    UseButtonSubmitResult,
    ParsedThemeColor,
} from "@peersyst/react-components-core";
import { ButtonProps } from "../Button.types";

export type ButtonComputedProps = {
    color: ParsedThemeColor;
} & UseButtonSubmitResult;

/**
 * useButton return properties
 */
export type UseButtonResult = {
    props: ButtonProps;
    computed: ButtonComputedProps;
};

export default function (rawProps: ButtonProps): UseButtonResult {
    const props = useMergeDefaultProps("Button", rawProps);

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
