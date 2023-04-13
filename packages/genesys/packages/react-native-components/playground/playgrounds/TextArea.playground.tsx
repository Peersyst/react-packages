import { TextArea, TextAreaProps } from "../../src";
import playground from "../playground";
import { View } from "react-native";

const Wrapper = (props: TextAreaProps): JSX.Element => {
    return (
        <View style={{ width: 300, height: 200 }}>
            <TextArea {...props} />
        </View>
    );
};

export default playground("TextArea", Wrapper, {
    label: "Label",
    required: true,
    showValid: true,
    style: {
        width: 300,
        height: 100,
    },
});
