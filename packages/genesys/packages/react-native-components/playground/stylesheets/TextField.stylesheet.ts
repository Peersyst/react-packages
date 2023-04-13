import { stylesheet } from "@peersyst/react-native-styled";
import { TextField } from "../../src";

export default stylesheet(TextField)(({ fromTheme }) => ({
    component: {
        backgroundColor: fromTheme("palette.status.error"),
    },
}));
