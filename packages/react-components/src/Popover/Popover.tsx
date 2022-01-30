import { createRef, ReactNode, useCallback, useState } from "react";
import { PopoverProps } from "./Popover.types";
import { PopoverContent, PopoverPaper, PopoverPopper, PopoverRoot } from "./Popover.styles";
import { findSlot, cx } from "@peersyst/react-utils";
import { ClickAwayListener } from "../ClickAwayListener";
import { useControlled, usePreventBodyScroll } from "@peersyst/react-hooks";
import { PaperProps } from "../Paper";
import { usePopperOrigin } from "./hooks/usePopperOrigin";
import { Animated } from "../Animated";

export default function Popover({
    visible: visibleProp,
    onHide,
    onShow,
    showOn = "hover",
    position = "top-right",
    animation: { AnimatedComponent, props: AnimatedComponentProps } = {
        AnimatedComponent: Animated.Fade,
        props: { duration: 200 },
    },
    children,
}: PopoverProps): JSX.Element {
    const [visible, setVisible] = useControlled(false, visibleProp, visibleProp ? onHide : onShow);
    const [fullyVisible, setFullyVisible] = useState(visible);
    usePreventBodyScroll(visible);

    const popper = findSlot(children, Popper);
    const content = findSlot(children, Content);

    const handleClick = useCallback(() => {
        if (showOn === "click") {
            setVisible(true);
            setFullyVisible(true);
        }
    }, [showOn, setVisible, setFullyVisible]);

    const handleMouseOver = useCallback(() => {
        if (showOn === "hover") {
            setVisible(true);
            setFullyVisible(true);
        }
    }, [showOn, setVisible, setFullyVisible]);

    const handleMouseLeave = useCallback(() => {
        showOn === "hover" && setVisible(false);
    }, [showOn, setVisible]);

    const popperRef = createRef<HTMLDivElement>();
    const origin = usePopperOrigin(fullyVisible, position, popperRef);

    return (
        <ClickAwayListener onClickAway={() => showOn === "click" && visible && setVisible(false)}>
            <PopoverRoot>
                <PopoverPopper
                    position={position}
                    origin={origin}
                    ref={popperRef}
                    onMouseEnter={() => visible && handleMouseOver()}
                    onMouseLeave={() => visible && handleMouseLeave()}
                >
                    <AnimatedComponent
                        {...AnimatedComponentProps}
                        in={visible}
                        onExited={() => setFullyVisible(false)}
                    >
                        {popper}
                    </AnimatedComponent>
                </PopoverPopper>
                <PopoverContent
                    onClick={handleClick}
                    onMouseEnter={handleMouseOver}
                    onMouseLeave={handleMouseLeave}
                    className="PopoverContent"
                >
                    {content}
                </PopoverContent>
            </PopoverRoot>
        </ClickAwayListener>
    );
}

const Popper = ({ elevation = 8, className, ...rest }: PaperProps) => (
    <PopoverPaper elevation={elevation} className={cx("PopoverPopper", className)} {...rest} />
);
const Content = ({ children }: { children: ReactNode }) => <>{children}</>;

Popover.Popper = Popper;
Popover.Content = Content;
