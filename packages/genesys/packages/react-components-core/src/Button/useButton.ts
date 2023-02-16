import { useContext } from "react";
import { WithParsedThemeColor } from "../common";
import { useMergeDefaultProps } from "../config";
import { FormContext } from "../Form";
import { useColor } from "../theme";
import { ButtonProps } from "./Button";

/**
 * useButton return properties
 */
export interface UseButtonReturn extends WithParsedThemeColor<ButtonProps> {
    /**
     * Button can be interacted with
     */
    enabled: boolean;
    /**
     * Submit form handler with implicit action
     */
    handleSubmit: (() => void) | undefined;
}

export default function (props: ButtonProps): UseButtonReturn {
    const {
        color: mergedColorProp,
        disabled,
        loading,
        type,
        action,
        ...rest
    } = useMergeDefaultProps("Button", props);

    const color = useColor(mergedColorProp);

    const { valid, handleSubmit: submit } = useContext(FormContext);
    const enabled = disabled || loading || (type === "submit" && valid === false);

    const handleSubmit = () => {
        submit(action);
    };

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
