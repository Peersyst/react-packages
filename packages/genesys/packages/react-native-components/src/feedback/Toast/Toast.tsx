import { ToastProps } from "./Toast.types";
import { AnimatedProps } from "../../util/Animated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import getAnimatedComponent from "./utils/getAnimatedComponent";
import { SlideProps } from "../../util/Animated/Slide";
import { useCoreToast } from "@peersyst/react-components-core";
import { ToastAlert } from "./Toast.styles";
import { useToastStyles } from "./hooks";

export default function Toast(rawProps: ToastProps): JSX.Element {
    const { props, comps } = useCoreToast(rawProps);

    const {
        content,
        icon,
        type,
        action,
        position = "top",
        onExited,
        animation = "fadingSlide",
        elevation = 1,
        square,
        style: _style,
        ...rest
    } = props;

    const { open } = comps;

    const style = useToastStyles(props);

    const safeAreaInsets = useSafeAreaInsets();

    const AnimatedComponent = getAnimatedComponent(animation);

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
        <AnimatedComponent {...animatedProps} position={position} safeAreaInsets={safeAreaInsets}>
            <ToastAlert
                content={content}
                icon={icon}
                type={type}
                action={action}
                style={style}
                elevation={elevation}
                square={square}
                {...rest}
            />
        </AnimatedComponent>
    );
}
