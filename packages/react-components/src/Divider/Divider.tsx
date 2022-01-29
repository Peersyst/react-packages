import React from "react";
import { DividerRoot, DividerWithChildren } from "./Divider.styles";
import { DividerProps } from "./Divider.types";
import { cx } from "../utils/cx";

export function Divider({ size = "1px", width = "full-width", className, style, color, children }: DividerProps): JSX.Element {
    return (
        <>
            {children ? (
                <DividerWithChildren width={width} className={cx("Divider", className)} style={style}>
                    <DividerRoot height={size} color={color} width="full-width" />
                    {children}
                    <DividerRoot height={size} color={color} width="full-width" />
                </DividerWithChildren>
            ) : (
                <DividerRoot height={size} color={color} width={width} style={style} className={cx("Divider", className)} />
            )}
        </>
    );
}
