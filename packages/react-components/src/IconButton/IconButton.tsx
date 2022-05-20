import { IconButtonRoot } from "./IconButton.styles";
import { IconButtonProps } from "./IconButton.types";
import { cx, fsx, setRef } from "@peersyst/react-utils";
import { forwardRef } from "react";

const IconButton = forwardRef(
    (
        {
            children,
            disabled,
            onClick,
            style,
            className,
            type = "button",
            ...rest
        }: IconButtonProps,
        ref,
    ): JSX.Element => {
        return (
            <IconButtonRoot
                disabled={disabled}
                onClick={onClick}
                style={fsx(style, { disabled })}
                className={cx("IconButton", disabled && "Disabled", className)}
                type={type}
                ref={(r) => setRef(ref, r)}
                {...rest}
            >
                {children}
            </IconButtonRoot>
        );
    },
);
IconButton.displayName = "IconButton";

export default IconButton;
