import { Row } from "../../layout/Row";
import { ButtonRootProps, ButtonContainerProps } from "./Button.types";
import styled from "@peersyst/react-native-styled";
import { LinearGradient } from "expo-linear-gradient";

/**
 * Container for the loader
 */
export const ButtonLoader = styled(Row, { alignItems: "center", justifyContent: "center" })(() => ({
    position: "absolute",
    alignSelf: "center",
}));

/**
 * Main button styles
 */
export const ButtonRoot = styled(LinearGradient)<ButtonRootProps>(({ theme, fullWidth }) => ({
    alignSelf: fullWidth ? "stretch" : "flex-start",
    justifyContent: "center",
    borderRadius: theme.borderRadius,
}));

export const ButtonContent = styled(Row, { gap: 16, alignItems: "center" })<ButtonContainerProps>(
    ({ isLoading }) => ({
        opacity: isLoading ? 0 : 1,
    }),
);
