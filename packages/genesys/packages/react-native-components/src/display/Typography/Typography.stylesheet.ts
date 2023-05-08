import { stylesheet } from "@peersyst/react-native-styled";
import Typography from "./Typography";

export const typographyStylesheet = stylesheet(Typography)(() => ({
    light: {
        opacity: 0.7,
    },
}));
