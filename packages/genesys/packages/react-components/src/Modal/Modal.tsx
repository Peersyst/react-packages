import { useCallback } from "react";
import { ModalProps } from "./Modal.types";
import { useControlled } from "@peersyst/react-hooks";
import { Backdrop, ForwardedBackdropProps } from "../Backdrop";
import { ModalRoot } from "./Modal.styles";
import { getAnimatedComponent } from "./utils/getAnimatedComponent";
import { cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

export default function Modal(props: ModalProps): JSX.Element {
    const {
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
        unmountOnExit,
    } = useMergeDefaultProps("Modal", props);

    const [open, setOpen] = useControlled(defaultOpen, propOpen);

    const handleClose = useCallback(() => {
        if (closable && open) {
            setOpen(false);
            onClose?.();
        }
    }, [closable, open, setOpen]);

    const { AnimatedComponent, props: AnimatedComponentProps } = getAnimatedComponent(animation);

    const forwardedBackdropProps: ForwardedBackdropProps = {
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
        unmountOnExit,
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
