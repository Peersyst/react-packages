import { ToastProps } from "./Toast.types";
import { AnimatedProps } from "../../util/Animated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import getAnimatedComponent from "./utils/getAnimatedComponent";
import { SlideProps } from "../../util/Animated/Slide";
import { useMergeDefaultProps, Toast as CoreToast } from "@peersyst/react-components-core";
import { ToastAlert } from "./Toast.styles";

export default function Toast(props: ToastProps): JSX.Element {
    const {
        content,
        icon,
        type,
        action,
        position = "top",
        open: openProp,
        onClose,
        onExited,
        animation = "fadingSlide",
        duration = 4000,
        style,
        elevation = 1,
        square,
    } = useMergeDefaultProps("Toast", props);

    const safeAreaInsets = useSafeAreaInsets();

    const AnimatedComponent = getAnimatedComponent(animation);

    return (
        <CoreToast open={openProp} onClose={onClose} type={type} duration={duration}>
            {(open) => {
                const animatedProps: AnimatedProps | SlideProps = {
                    in: open,
                    appear: true,
                    duration: 200,
                    onExited,
                    ...((animation === "slide" || animation === "fadingSlide") && {
                        direction: position === "top" ? "down" : "up",
                    }),
                };

                return (
                    <AnimatedComponent
                        {...animatedProps}
                        position={position}
                        safeAreaInsets={safeAreaInsets}
                    >
                        <ToastAlert
                            content={content}
                            icon={icon}
                            type={type}
                            action={action}
                            style={style}
                            elevation={elevation}
                            square={square}
                        />
                    </AnimatedComponent>
                );
            }}
        </CoreToast>
    );
}
