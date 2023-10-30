import { RadioButton } from "../../src";
import playground from "../playground";
import styled from "@peersyst/react-native-styled";

const StyledRadioButton = styled(RadioButton)(() => ({
    label: {
        label: {
            color: "green",
        },
    },
    component: {
        color: "red",
        active: {
            color: "blue",
        },
    },
}));

export default playground("RadioButton", StyledRadioButton, {
    label: "como 33",
    
});
