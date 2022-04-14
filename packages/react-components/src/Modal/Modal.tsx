import { useCallback } from "react";
import { ModalProps } from "./Modal.types";
import { useControlled } from "@peersyst/react-hooks";
import { Backdrop, ForwardedBackdropProps } from "../Backdrop";
import { ModalRoot } from "./Modal.styles";
import { getAnimatedComponent } from "./utils/getAnimatedComponent";
import { cx } from "@peersyst/react-utils";

export default function Modal({
    name,
    closable = true,
    defaultOpen = true,
    open: propOpen,
    children,
    onClose,
    onExited,
    transitionsDuration = 300,
    animation = "fade",
    elevation = 16,
    BackdropProps,
    className,
    style,
    renderBackdrop,
    renderAtRoot,
    preventScroll = true,
}: ModalProps): JSX.Element {
    const [open, setOpen] = useControlled(defaultOpen, propOpen, propOpen ? onClose : undefined);

    const handleClose = useCallback(() => {
        if (closable && open) {
            setOpen(false);
        }
    }, [closable, open, setOpen]);

    const { AnimatedComponent, props: AnimatedComponentProps } = getAnimatedComponent(animation);

    const forwardedBackdropProps: ForwardedBackdropProps = {
        name,
        defaultOpen,
        open,
        onClose: handleClose,
        onExited,
        closable,
        preventScroll: preventScroll,
        childrenAnimation: {
            AnimatedComponent,
            props: { ...AnimatedComponentProps, duration: transitionsDuration },
        },
        renderAtRoot,
        renderBackdrop,
    };

    return (
        <Backdrop {...BackdropProps} {...forwardedBackdropProps}>
            <ModalRoot
                className={cx("Modal", className)}
                style={style}
                onMouseDown={(e) => e.stopPropagation()}
                elevation={elevation}
            >
                {children}
            </ModalRoot>
        </Backdrop>
    );
}
