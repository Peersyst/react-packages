import { IconButtonRoot } from "./IconButton.styles";
import { IconButtonProps } from "./IconButton.types";
import { cx, fsx, setRef } from "@peersyst/react-utils";
import { forwardRef, MouseEventHandler, useContext } from "react";
import { useTheme } from "../theme";
import { FormContext, useMergeDefaultProps, useColor } from "@peersyst/react-components-core";

const IconButton = forwardRef((props: IconButtonProps, ref): JSX.Element => {
    const {
        children,
        loading,
        loadingElement: loadingElementProp,
        disabled: disabledProp = false,
        onClick: onClickProp,
        style,
        className,
        type = "button",
        action,
        color: colorProp,
        ...rest
    } = useMergeDefaultProps("IconButton", props);

    const { loader: DefaultLoader } = useTheme();
    const loadingElement = loadingElementProp || <DefaultLoader />;

    const color = useColor(colorProp);

    const { valid, handleSubmit: submit } = useContext(FormContext);
    const disabled = disabledProp || loading || (type === "submit" && valid === false);

    const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        submit(action);
    };

    const onClick = type === "submit" ? handleSubmit : onClickProp;

    return (
        <IconButtonRoot
            disabled={disabled || loading}
            onClick={onClick}
            style={fsx(style, { disabled })}
            className={cx("IconButton", disabled && "Disabled", className)}
            type={type}
            ref={(r) => setRef(ref, r)}
            color={color}
            {...rest}
        >
            {loading ? loadingElement : children}
        </IconButtonRoot>
    );
});
IconButton.displayName = "IconButton";

export default IconButton;
