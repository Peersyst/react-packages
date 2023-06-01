import { stylesheet } from "@peersyst/react-native-styled";
import { Typography } from "../../src";

export const typographyStylesheet = stylesheet(Typography)(() => ({
    light: {
        color: "grey",
    },
}));
