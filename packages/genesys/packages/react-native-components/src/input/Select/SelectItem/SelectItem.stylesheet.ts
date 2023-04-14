import { stylesheet } from "@peersyst/react-native-styled";
import SelectItem from "./SelectItem";
import { alpha } from "@peersyst/react-utils";

export const selectItemStylesheet = stylesheet(SelectItem)(({ fromTheme }) => ({
    selected: {
        backgroundColor: fromTheme("palette.primary", (primary) => alpha(primary, 0.4)),
        fontWeight: "bold",
    },
}));
