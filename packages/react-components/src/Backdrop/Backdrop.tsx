import { useCallback } from "react";
import { BackdropProps } from "./Backdrop.types";
import { Animated, TransitionStyles } from "../Animated";
import { useControlled, usePreventBodyScroll } from "@peersyst/react-hooks";
import { BackdropRoot } from "./Backdrop.styles";
import { cx } from "@peersyst/react-utils";

const BackdropAnimation: TransitionStyles = {
    exiting: {
        backgroundColor: "transparent",
    },
    exited: {
        backgroundColor: "transparent",
    },
};

export default function Backdrop({
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
    renderBackdrop = true,
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
        <Animated
            animation={animation}
            animatedProperties="background-color"
            in={open}
            duration={transitionsDuration}
            onExited={onExited}
        >
            <BackdropRoot
                transparent={transparent}
                renderBackdrop={renderBackdrop}
                onMouseDown={handleClose}
                className={cx("Backdrop", className)}
                style={style}
            >
                {children && (
                    <AnimatedComponent {...AnimatedComponentProps} in={open}>
                        {children}
                    </AnimatedComponent>
                )}
            </BackdropRoot>
        </Animated>
    );
}
