import styled from "@peersyst/react-native-styled";
import { Animated, View } from "react-native";

export const TabIndicatorRoot = styled(Animated.View)(() => ({
    position: "absolute",
    bottom: 0,
    zIndex: 2,
    height: 2,
}));

export const Indicator = styled(View)(({ theme }) => ({
    backgroundColor: theme.palette.primary,
}));
