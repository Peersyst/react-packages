import { useEffect } from "react";
import { ToastAction, ToastContainer, ToastContent } from "./Toast.styles";
import { ToastProps } from "./Toast.types";
import { useControlled } from "../hooks";
import { getAnimation } from "./utils/getAnimation";
import { Row, useTheme } from "..";
import { getIcon } from "./utils/getIcon";
import { cx } from "../utils/cx";

export function Toast({
    message,
    type,
    action,
    position: positionProp,
    open: propOpen,
    onClose,
    onExited,
    animation: animationProp,
    duration = 4000,
    className,
    style,
}: ToastProps): JSX.Element {
    const {
        theme: { toastAnimation, toastPosition },
    } = useTheme();
    const animation = animationProp || toastAnimation;
    const position = positionProp || toastPosition;

    const [open, setOpen] = useControlled(true, propOpen, propOpen ? onClose : undefined);

    let hideTimeout: NodeJS.Timeout;

    useEffect(() => {
        if (open && (!type || type !== "loading")) {
            hideTimeout = setTimeout(() => setOpen(false), duration);
            return () => {
                clearTimeout(hideTimeout);
            };
        }
    }, [open]);

    const { AnimatedComponent, props: AnimatedComponentProps } = getAnimation(animation, position);

    return (
        <ToastContainer position={position} className="ToastContainer">
            <AnimatedComponent in={open} duration={200} onExited={onExited} {...AnimatedComponentProps}>
                <ToastContent type={type} className={cx("Toast", className)} style={style} elevation={5}>
                    <Row alignItems="center" gap={10}>
                        {type && getIcon(type)}
                        {message}
                    </Row>
                    <ToastAction>{action}</ToastAction>
                </ToastContent>
            </AnimatedComponent>
        </ToastContainer>
    );
}
