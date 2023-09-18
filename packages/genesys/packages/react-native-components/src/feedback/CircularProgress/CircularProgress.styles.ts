import styled from "@peersyst/react-native-styled";
import { View } from "react-native";
import { Svg } from "react-native-svg";

export const CircularProgressRoot = styled(View)(() => ({
    alignItems: "center",
    justifyContent: "center",
}));

export const CircularProgressSvg = styled(Svg)(() => ({
    transform: [{ rotateZ: "270deg" }],
}));

export const CircularProgressContent = styled(View)(() => ({
    position: "absolute",
}));
