import { alpha } from "@peersyst/react-utils";
import { Button } from "../../src";
import playground from "../playground";
import { currentColor } from "@peersyst/react-native-styled";
import styled from "@peersyst/react-native-styled";

const StyledButton = styled(Button)(() => ({
    filled: {
        backgroundColor: currentColor((color) => {
            return alpha(color, 0.75);
        }),
        borderColor: currentColor(),
        borderWidth: 1,
    },
}));

export default playground("Button", StyledButton, {
    children: "Button",
    size: "lg",
    variant: "filled",
    color: "status.success",
});
