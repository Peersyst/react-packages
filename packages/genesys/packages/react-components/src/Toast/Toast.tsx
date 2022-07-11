import { useEffect } from "react";
import { ToastAction, ToastContainer, ToastContent } from "./Toast.styles";
import { ToastProps } from "./Toast.types";
import { useControlled } from "@peersyst/react-hooks";
import { getAnimation } from "./utils/getAnimation";
import { useGetIcon } from "./hooks/useGetIcon";
import { cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { Row } from "../Row";

export default function Toast(props: ToastProps): JSX.Element {
    const {
        message,
        type,
        action,
        position = "top-right",
        open: propOpen,
        onClose,
        onExited,
        animation = "fadingSlide",
        duration = 4000,
        className,
        style,
    } = useMergeDefaultProps("Toast", props);

    const [open, setOpen] = useControlled(true, propOpen, propOpen ? onClose : undefined);

    const icon = useGetIcon(type);

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
            <AnimatedComponent
                in={open}
                duration={200}
                onExited={onExited}
                {...AnimatedComponentProps}
            >
                <ToastContent
                    type={type}
                    className={cx("Toast", className)}
                    style={style}
                    elevation={5}
                >
                    <Row flex={1} gap={10} wrap wrapGap={10} justifyContent="space-between">
                        <Row alignItems="center" gap={10}>
                            <Row flex={0.05}>{icon}</Row>
                            <Row flex={0.95}>{message}</Row>
                        </Row>
                        <ToastAction>{action}</ToastAction>
                    </Row>
                </ToastContent>
            </AnimatedComponent>
        </ToastContainer>
    );
}
