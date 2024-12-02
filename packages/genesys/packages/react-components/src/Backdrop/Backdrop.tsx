import { useCallback } from "react";
import { BackdropProps } from "./Backdrop.types";
import { Animated, TransitionStyles } from "../Animated";
import { useControlled, usePreventBodyScroll } from "@peersyst/react-hooks";
import { BackdropRoot } from "./Backdrop.styles";
import { cx } from "@peersyst/react-utils";
import { createPortal } from "react-dom";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const BackdropAnimation: TransitionStyles = {
    exiting: {
        backgroundColor: "transparent",
    },
    exited: {
        backgroundColor: "transparent",
    },
};

export default function Backdrop(props: BackdropProps): JSX.Element {
    const {
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
        renderAtRoot = false,
        children,
        unmountOnExit = false,
    } = useMergeDefaultProps("Backdrop", props);

    const [open, setOpen] = useControlled(defaultOpen, propsOpen);
    usePreventBodyScroll(open && preventScroll);

    const handleClose = useCallback(() => {
        if (closable && open) {
            setOpen(false);
            onClose?.();
        }
    }, [closable, open, setOpen]);

    const backdrop = (
        <Animated
            animation={animation}
            animatedProperties="background-color"
            in={open}
            duration={transitionsDuration}
            onExited={onExited}
            unmountOnExit={unmountOnExit}
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

    // Check ssr
    if (typeof window !== "undefined" && renderAtRoot) {
        const modalRoot = document.getElementById("modal-root");

        if (modalRoot) return createPortal(backdrop, modalRoot);
    }

    return backdrop;
}
