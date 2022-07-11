import { SelectMenuRoot } from "./SelectMenu.styles";
import { Animated } from "../../Animated";
import { SelectMenuProps } from "./SelectMenu.types";
import { cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

export default function SelectMenu(props: SelectMenuProps): JSX.Element {
    const { open, expandable, className, style, children } = useMergeDefaultProps(
        "SelectMenu",
        props,
    );

    return (
        <Animated.FadingSlide direction="down" duration={100} in={open} unmountOnExit mountOnEnter>
            <SelectMenuRoot
                expandable={expandable}
                className={cx("SelectMenu", className)}
                style={style}
                elevation={6}
            >
                {children}
            </SelectMenuRoot>
        </Animated.FadingSlide>
    );
}
