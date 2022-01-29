import React from "react";
import { SelectMenuRoot } from "./SelectMenu.styles";
import { Animated } from "../../Animated";
import { SelectMenuProps } from "./SelectMenu.types";
import { cx } from "../../utils/cx";

export function SelectMenu({ open, expandable, className, style, children }: SelectMenuProps): JSX.Element {
    return (
        <Animated.FadingSlide direction="down" duration={100} in={open} unmountOnExit mountOnEnter>
            <SelectMenuRoot expandable={expandable} className={cx("SelectMenu", className)} style={style} elevation={6}>
                {children}
            </SelectMenuRoot>
        </Animated.FadingSlide>
    );
}
