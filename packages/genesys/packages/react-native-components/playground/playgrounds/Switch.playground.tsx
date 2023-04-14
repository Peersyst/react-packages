import { Switch } from "../../src";
import playground from "../playground";
import styled, { currentColor } from "@peersyst/react-native-styled";

const StyledSwitch = styled(Switch)(({ theme }) => ({
    currentColor: theme.palette.status.warning,
    label: {
        label: {
            color: "green",
        },
    },
    component: {
        backgroundColor: currentColor(),
        active: {
            backgroundColor: theme.palette.status.success,
        },
    },
}));

export default playground("Switch", StyledSwitch, {
    label: "el tercero del nano?",
});
