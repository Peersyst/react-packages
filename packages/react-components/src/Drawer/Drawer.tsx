import React from "react";
import { DrawerMenu } from "./Drawer.styles";
import { DrawerProps } from "./Drawer.types";
import { useControlled } from "../hooks";
import { Backdrop, ForwardedBackdropProps } from "../Backdrop";
import { Animated } from "../Animated";
import { getAnimationDirection } from "./utils/getAnimationDirection";
import { cx } from "../utils/cx";

/**
 * TODO:
 * - Option for drawer to stay on the side moving the screen (Like asana does)
 */

export function Drawer({
    name,
    defaultOpen = true,
    open: propOpen,
    onClose,
    onExited,
    elevation = 16,
    className,
    style,
    children,
    position = "left",
    animation,
    transitionsDuration = 300,
    BackdropProps,
    size = {
        width: "300px",
        height: "100%",
        mobileWidth: "100%",
        mobileHeight: "100%",
    },
    preventScroll = true,
}: DrawerProps) {
    const [open, setOpen] = useControlled(defaultOpen, propOpen, propOpen ? onClose : undefined);

    const forwardedBackdropProps: ForwardedBackdropProps = {
        name,
        defaultOpen,
        open,
        onClose: () => setOpen(false),
        onExited,
        preventScroll,
        childrenAnimation: animation || {
            AnimatedComponent: Animated.Slide,
            props: { duration: transitionsDuration, direction: getAnimationDirection(position) },
        },
    };

    return (
        <Backdrop {...BackdropProps} {...forwardedBackdropProps}>
            <DrawerMenu
                position={position}
                size={size}
                className={cx("Drawer", className)}
                style={style}
                onMouseDown={(e) => e.stopPropagation()}
                elevation={elevation}
                square
            >
                {children}
            </DrawerMenu>
        </Backdrop>
    );
}
