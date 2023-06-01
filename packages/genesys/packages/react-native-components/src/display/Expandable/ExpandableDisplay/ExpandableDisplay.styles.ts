import styled from "@peersyst/react-native-styled";
import { Pressable } from "react-native";
import { ExpandableDisplayRootProps } from "./ExpandableDisplay.types";

export const ExpandableDisplayRoot = styled(Pressable)<ExpandableDisplayRootProps>(
    ({ reverse }) => ({
        flexDirection: reverse ? "row-reverse" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8,
    }),
);
