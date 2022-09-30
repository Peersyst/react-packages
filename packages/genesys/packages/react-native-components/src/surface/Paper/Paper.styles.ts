import styled from "@peersyst/react-native-styled";
import { View } from "react-native";
import { PaperRootProps } from "./Paper.types";

export const PaperRoot = styled(View)<PaperRootProps>(({ theme, elevation, square }) => ({
    backgroundColor: theme.palette.background,
    borderRadius: square ? 0 : theme.borderRadius,
    ...theme.shadows[elevation],
}));
