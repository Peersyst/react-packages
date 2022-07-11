import { IconButtonRoot } from "./IconButton.styles";
import { IconButtonProps } from "./IconButton.types";
import { cx, fsx, setRef } from "@peersyst/react-utils";
import { forwardRef, useContext } from "react";
import { useTheme } from "../theme";
import { FormContext, useMergeDefaultProps } from "@peersyst/react-components-core";

const IconButton = forwardRef((props: IconButtonProps, ref): JSX.Element => {
    const {
        children,
        loading,
        loadingElement: loadingElementProp,
        disabled: disabledProp = false,
        onClick,
        style,
        className,
        type = "button",
        ...rest
    } = useMergeDefaultProps("IconButton", props);

    const { loader: DefaultLoader } = useTheme();
    const loadingElement = loadingElementProp || <DefaultLoader />;

    const { valid } = useContext(FormContext);
    const disabled = disabledProp || loading || (type === "submit" && valid === false);

    return (
        <IconButtonRoot
            disabled={disabled || loading}
            onClick={onClick}
            style={fsx(style, { disabled })}
            className={cx("IconButton", disabled && "Disabled", className)}
            type={type}
            ref={(r) => setRef(ref, r)}
            {...rest}
        >
            {loading ? loadingElement : children}
        </IconButtonRoot>
    );
});
IconButton.displayName = "IconButton";

export default IconButton;