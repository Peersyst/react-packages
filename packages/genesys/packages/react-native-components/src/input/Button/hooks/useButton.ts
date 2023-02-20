// TODO: Remove in pr #155

import {
    useButtonSubmit,
    useColor,
    useMergeDefaultProps,
    UseButtonSubmitResult,
    WithParsedThemeColor,
} from "@peersyst/react-components-core";
import { ButtonProps } from "../Button.types";

/**
 * useButton return properties
 */
export type UseButtonResult = WithParsedThemeColor<ButtonProps> & UseButtonSubmitResult;

export default function (props: ButtonProps): UseButtonResult {
    const {
        color: colorProp,
        disabled = false,
        loading = false,
        type,
        action,
        ...rest
    } = useMergeDefaultProps("Button", props);

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
