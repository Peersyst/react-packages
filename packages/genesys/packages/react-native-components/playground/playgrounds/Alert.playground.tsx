import { View } from "react-native";
import { Alert, AlertProps } from "../../src";
import playground from "../playground";
import styled from "@peersyst/react-native-styled";

const StyledAlert = styled(Alert)(() => ({
    width: 300,
    height: 65,
}));

const Wrapper = (props: AlertProps): JSX.Element => {
    return (
        <View style={{ width: 300, height: 65 }}>
            <StyledAlert {...props} />
        </View>
    );
};

export default playground("Alert", Wrapper, {
    type: "success",
    content: "Alert!",
});
