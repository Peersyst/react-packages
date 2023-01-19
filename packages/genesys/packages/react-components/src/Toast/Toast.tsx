import { ToastAlert, ToastContainer } from "./Toast.styles";
import { ToastProps } from "./Toast.types";
import { getAnimation } from "./utils/getAnimation";
import { useMergeDefaultProps, Toast as CoreToast } from "@peersyst/react-components-core";

export default function Toast(props: ToastProps): JSX.Element {
    const {
        content,
        icon,
        type,
        action,
        position = "top-right",
        open: openProp,
        onClose,
        onExited,
        animation = "fadingSlide",
        duration = 4000,
        className,
        style,
        elevation,
        square,
    } = useMergeDefaultProps("Toast", props);

    const { AnimatedComponent, props: AnimatedComponentProps } = getAnimation(animation, position);

    return (
        <CoreToast open={openProp} onClose={onClose} type={type} duration={duration}>
            {(open) => (
                <ToastContainer position={position} className="ToastContainer">
                    <AnimatedComponent
                        in={open}
                        duration={200}
                        onExited={onExited}
                        {...AnimatedComponentProps}
                    >
                        <ToastAlert
                            type={type}
                            content={content}
                            icon={icon}
                            action={action}
                            className={className}
                            style={style}
                            elevation={elevation}
                            square={square}
                        />
                    </AnimatedComponent>
                </ToastContainer>
            )}
        </CoreToast>
    );
}
