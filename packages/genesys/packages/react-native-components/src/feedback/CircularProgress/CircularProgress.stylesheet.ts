import { currentColor, stylesheet } from "@peersyst/react-native-styled";
import CircularProgress from "./CircularProgress";

export const circularProgressStylesheet = stylesheet(CircularProgress)(() => ({
    color: currentColor(),
}));
