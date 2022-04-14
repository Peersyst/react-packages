import { DrawerMenu } from "./Drawer.styles";
import { DrawerProps } from "./Drawer.types";
import { useControlled } from "@peersyst/react-hooks";
import { Backdrop, ExposedBackdropProps, ForwardedBackdropProps } from "../Backdrop";
import { Animated } from "../Animated";
import { getAnimationDirection } from "./utils/getAnimationDirection";
import { cx } from "@peersyst/react-utils";
import { MouseEvent } from "react";

/**
 * TODO:
 * - Option for drawer to stay on the side moving the screen (Like asana does)
 */

export default function Drawer({
    name,
    variant = "temporary",
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
        size: "300px",
    },
    renderBackdrop,
    renderAtRoot,
}: DrawerProps) {
    const [open, setOpen] = useControlled(
        defaultOpen,
        variant === "permanent" ? true : propOpen,
        propOpen ? onClose : undefined,
    );

    const forwardedBackdropProps: ForwardedBackdropProps = {
        name,
        defaultOpen,
        open,
        onClose: variant === "temporary" ? () => setOpen(false) : undefined,
        closable: variant !== "permanent",
        onExited,
        preventScroll: variant === "temporary",
        childrenAnimation: animation || {
            AnimatedComponent: Animated.Slide,
            props: { duration: transitionsDuration, direction: getAnimationDirection(position) },
        },
        renderBackdrop: renderBackdrop ?? variant === "temporary",
        renderAtRoot,
    };

    const backdropProps: ExposedBackdropProps = {
        ...BackdropProps,
        transparent: BackdropProps?.transparent ?? variant !== "temporary",
    };

    return (
        <Backdrop {...backdropProps} {...forwardedBackdropProps}>
            <DrawerMenu
                position={position}
                size={size}
                className={cx("Drawer", className)}
                style={style}
                onMouseDown={(e: MouseEvent) => e.stopPropagation()}
                elevation={variant === "temporary" ? elevation : 0}
                square
            >
                {children}
            </DrawerMenu>
        </Backdrop>
    );
}
