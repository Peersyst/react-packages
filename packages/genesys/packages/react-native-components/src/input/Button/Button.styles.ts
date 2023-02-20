import { ButtonRootProps } from "./Button.types";
import styled from "@peersyst/react-native-styled";
import { LinearGradient } from "expo-linear-gradient";

export const ButtonRoot = styled(LinearGradient)<ButtonRootProps>(({ theme, fullWidth }) => ({
    alignSelf: fullWidth ? "stretch" : "flex-start",
    justifyContent: "center",
    borderRadius: theme.borderRadius,
}));
