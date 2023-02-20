import styled from "@peersyst/react-native-styled";
import { View } from "react-native";
import { GradientView } from "../../layout/GradientView";
import { SwipeButtonRootProps } from "./SwipeButton.types";

export const SwipeButtonRoot = styled(GradientView)<SwipeButtonRootProps>(({ fullWidth }) => ({
    alignSelf: fullWidth ? "stretch" : "flex-start",
    justifyContent: "center",
    alignItems: "center",
    height: 48,
}));

export const SwipeButtonTrack = styled(View)(() => ({
    position: "absolute",
    zIndex: 1,
    width: "100%",
    height: "100%",
    padding: 4,
}));

export const SwipeButtonRail = styled(View)(() => ({
    width: "100%",
    height: "100%",
    justifyContent: "center",
}));

export const SwipeButtonThumb = styled(View)(() => ({
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
}));
