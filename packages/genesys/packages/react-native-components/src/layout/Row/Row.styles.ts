import styled from "@peersyst/react-native-styled";
import { Pressable } from "react-native";

export interface RowRootProps {
    wrap: boolean;
}

export const RowRoot = styled(Pressable)<RowRootProps>(({ wrap }) => ({
    flexDirection: "row",
    flexWrap: wrap ? "wrap" : "nowrap",
}));
