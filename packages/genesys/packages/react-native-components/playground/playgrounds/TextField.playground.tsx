import { TextField, TextFieldProps } from "../../src";
import playground from "../playground";
import { View } from "react-native";

const Wrapper = (props: TextFieldProps): JSX.Element => {
    return (
        <View style={{ width: 300, height: 200 }}>
            <TextField {...props} />
        </View>
    );
};

export default playground("TextField", Wrapper, {
    label: "Label",
    required: true,
    showValid: true,
    style: {
        width: 300,
        height: 100,
    },
});
