import React from "react";
import { IconButtonRoot } from "./IconButton.styles";
import { IconButtonProps } from "./IconButton.types";
import { cx } from "../utils/cx";
import { fsx } from "../utils/fsx";

export function IconButton({ children, disabled, onClick, style, className }: IconButtonProps): JSX.Element {
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
