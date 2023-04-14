import styled from "@peersyst/react-native-styled";
import { classify } from "@peersyst/react-utils";
import { Animated, View } from "react-native";

export const SwitchTrack = Animated.createAnimatedComponent(
    classify(
        styled(View)(() => ({
            height: 24,
            width: 38,
            padding: 5,
            borderRadius: 2000,
        })),
    ),
);

export const SwitchWrapper = styled(View)(() => ({
    height: "100%",
    width: "100%",
}));

export const SwitchElementWrapper = Animated.createAnimatedComponent(
    classify(
        styled(View)(() => ({
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
            zIndex: 1,
            flexDirection: "row",
        })),
    ),
);

export const SwitchThumb = Animated.createAnimatedComponent(
    classify(
        styled(View)(() => ({
            height: "100%",
            width: "50%",
            borderRadius: 2000,
        })),
    ),
);
