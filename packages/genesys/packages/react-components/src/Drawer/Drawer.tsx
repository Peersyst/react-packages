import { DrawerRoot } from "./Drawer.styles";
import { DrawerProps } from "./Drawer.types";
import { useControlled } from "@peersyst/react-hooks";
import { Backdrop, ExposedBackdropProps, ForwardedBackdropProps } from "../Backdrop";
import { Animated } from "../Animated";
import { getAnimationDirection } from "./utils/getAnimationDirection";
import { cx } from "@peersyst/react-utils";
import { MouseEvent } from "react";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

export default function Drawer(props: DrawerProps) {
    const {
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
        unmountOnExit,
    } = useMergeDefaultProps("Drawer", props);

    const [open, setOpen] = useControlled(defaultOpen, variant === "permanent" ? true : propOpen);

    const handleClose = () => {
        setOpen(false);
        onClose?.();
    };

    const forwardedBackdropProps: ForwardedBackdropProps = {
        defaultOpen,
        open,
        onClose: variant === "temporary" ? handleClose : undefined,
        closable: variant !== "permanent",
        onExited,
        preventScroll: variant === "temporary",
        childrenAnimation: animation || {
            AnimatedComponent: Animated.Slide,
            props: {
                duration: transitionsDuration,
                direction: getAnimationDirection(position),
            },
        },
        renderBackdrop: renderBackdrop ?? variant === "temporary",
        renderAtRoot,
        unmountOnExit,
    };

    const backdropProps: ExposedBackdropProps = {
        ...BackdropProps,
        transparent: BackdropProps?.transparent ?? variant !== "temporary",
    };

    return (
        <Backdrop {...backdropProps} {...forwardedBackdropProps}>
            <DrawerRoot
                position={position}
                size={size}
                className={cx("Drawer", className)}
                style={style}
                onMouseDown={(e: MouseEvent) => e.stopPropagation()}
                elevation={variant === "temporary" ? elevation : 0}
                square
            >
                {children}
            </DrawerRoot>
        </Backdrop>
    );
}
