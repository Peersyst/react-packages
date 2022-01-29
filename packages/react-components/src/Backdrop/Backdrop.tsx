import { useCallback } from "react";
import { BackdropProps } from "./Backdrop.types";
import { usePreventBodyScroll } from "../hooks";
import { Animated, TransitionStyles } from "../Animated";
import { useControlled } from "../hooks";
import { BackdropRoot } from "./Backdrop.styles";
import { cx } from "../utils/cx";

const BackdropAnimation: TransitionStyles = {
    exiting: {
        backgroundColor: "transparent",
    },
    exited: {
        backgroundColor: "transparent",
    },
};

export function Backdrop({
    preventScroll = true,
    closable = true,
    defaultOpen = true,
    open: propsOpen,
    onClose,
    onExited,
    animation = BackdropAnimation,
    childrenAnimation: { AnimatedComponent, props: AnimatedComponentProps } = {
        AnimatedComponent: Animated.Fade,
        props: { duration: 300 },
    },
    transparent = false,
    transitionsDuration = 400,
    className,
    style,
    children,
}: BackdropProps): JSX.Element {
    const [open, setOpen] = useControlled(defaultOpen, propsOpen, propsOpen ? onClose : undefined);
    usePreventBodyScroll(open && preventScroll);

    const handleClose = useCallback(() => {
        if (closable && open) {
            setOpen(false);
        }
    }, [closable, open, setOpen]);

    return (
        <Animated animation={animation} animatedProperties="background-color" in={open} duration={transitionsDuration} onExited={onExited}>
            <BackdropRoot transparent={transparent} onMouseDown={handleClose} className={cx("Backdrop", className)} style={style}>
                {children && (
                    <AnimatedComponent {...AnimatedComponentProps} in={open}>
                        {children}
                    </AnimatedComponent>
                )}
            </BackdropRoot>
        </Animated>
    );
}
