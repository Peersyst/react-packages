import { stylesheet } from "@peersyst/react-native-styled";
import { TextArea } from "../../src";

export default stylesheet(TextArea)(({ fromTheme }) => ({
    component: {
        backgroundColor: fromTheme("palette.status.success"),
        invalid: {
            input: {
                backgroundColor: fromTheme("palette.status.info"),
            },
        },
    },
}));
