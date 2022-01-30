import { IconButtonRoot } from "./IconButton.styles";
import { IconButtonProps } from "./IconButton.types";
import { cx, fsx } from "@peersyst/react-utils";

export default function IconButton({
    children,
    disabled,
    onClick,
    style,
    className,
}: IconButtonProps): JSX.Element {
    return (
        <IconButtonRoot
            disabled={disabled}
            onClick={onClick}
            style={fsx(style, { disabled })}
            className={cx("IconButton", disabled && "Disabled", className)}
        >
            {children}
        </IconButtonRoot>
    );
}
