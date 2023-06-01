import { stylesheet } from "@peersyst/react-native-styled";
import ExpandableDisplay from "./ExpandableDisplay";

export const expandableDisplayStylesheet = stylesheet(ExpandableDisplay)(({ fromTheme }) => ({
    padding: 16,
    color: fromTheme("palette.text"),
    fontSize: 16,
}));
