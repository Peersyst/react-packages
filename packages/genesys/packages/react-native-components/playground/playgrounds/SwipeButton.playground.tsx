import { alpha } from "@peersyst/react-utils";
import { SwipeButton } from "../../src";
import playground from "../playground";
import { currentColor } from "@peersyst/react-native-styled";
import styled from "@peersyst/react-native-styled";

const StyledSwipeButton = styled(SwipeButton)(({ theme }) => ({
    currentColor: theme.palette.status.info,
    backgroundColor: currentColor((color) => {
        return alpha(color, 0.75);
    }),
    borderColor: currentColor(),
    borderWidth: 1,
    width: 300,
    alignSelf: "center",
}));

export default playground("SwipeButton", StyledSwipeButton, {
    children: "SwipeButton",
    color: "status.success",
});
