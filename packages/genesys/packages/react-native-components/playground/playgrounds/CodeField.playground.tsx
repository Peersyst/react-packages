import { currentColor } from "@peersyst/react-native-styled";
import { CodeField, CodeFieldProps } from "../../src";
import playground from "../playground";
import { View } from "react-native";
import styled from "@peersyst/react-native-styled";

const StyledCodeField = styled(CodeField)(({ theme }) => ({
    currentColor: theme.palette.background,
    component: {
        textFields: {
            backgroundColor: currentColor(),
        },
    },
}));

const Wrapper = (props: CodeFieldProps): JSX.Element => {
    return (
        <View style={{ width: 350, height: 200 }}>
            <StyledCodeField {...props} />
        </View>
    );
};

export default playground("CodeField", Wrapper, {
    required: true,
    style: {
        width: "100%",
    },
    digits: 6,
    disabled: false,
    readonly: false,
    placeholder: "000000",
});
