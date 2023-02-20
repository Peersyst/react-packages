import { ButtonRootProps } from "./Button.types";
import styled from "@peersyst/react-native-styled";
import { GradientView } from "../../layout/GradientView";

export const ButtonRoot = styled(GradientView)<ButtonRootProps>(({ theme, fullWidth }) => ({
    alignSelf: fullWidth ? "stretch" : "flex-start",
    justifyContent: "center",
    borderRadius: theme.borderRadius,
}));
