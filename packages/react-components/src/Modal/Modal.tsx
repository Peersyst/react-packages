import { useCallback } from "react";
import { ModalProps } from "./Modal.types";
import { useControlled } from "../hooks";
import { Backdrop, ForwardedBackdropProps } from "../Backdrop";
import { ModalRoot } from "./Modal.styles";
import { getAnimatedComponent } from "./utils/getAnimatedComponent";
import { cx } from "../utils/cx";

export function Modal({
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
        preventScroll: true,
        childrenAnimation: { AnimatedComponent, props: { ...AnimatedComponentProps, duration: transitionsDuration } },
    };

    return (
        <Backdrop {...BackdropProps} {...forwardedBackdropProps}>
            <ModalRoot className={cx("Modal", className)} style={style} onMouseDown={(e) => e.stopPropagation()} elevation={elevation}>
                {children}
            </ModalRoot>
        </Backdrop>
    );
}
