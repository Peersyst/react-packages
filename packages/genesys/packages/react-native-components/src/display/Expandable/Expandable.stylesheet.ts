import { stylesheet } from "@peersyst/react-native-styled";
import Expandable from "./Expandable";

export const expandableStylesheet = stylesheet(Expandable)(({ fromTheme }) => ({
    borderRadius: fromTheme("borderRadius"),
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: fromTheme("palette.text"),
}));
