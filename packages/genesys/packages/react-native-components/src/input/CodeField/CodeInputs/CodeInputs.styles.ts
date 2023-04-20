import styled from "@peersyst/react-native-styled";
import { TextField } from "../../TextInput";

export const CodeInput = styled(TextField)(() => ({
    flex: 1,
    component: {
        input: {
            textAlign: "center",
        },
    },
}));
