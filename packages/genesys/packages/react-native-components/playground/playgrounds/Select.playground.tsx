import { Select, SelectProps } from "../../src";
import playground from "../playground";
import { View } from "react-native";

const Wrapper = (props: SelectProps<any>): JSX.Element => {
    return (
        <View style={{ width: 300, height: 200 }}>
            <Select {...props} />
        </View>
    );
};

export default playground("Select", Wrapper, {
    label: "Label",
    style: {
        width: 300,
        height: 100,
        component: {
            item: {
                selected: {
                    backgroundColor: "#123456",
                },
            },
        },
    },
    options: [
        {
            label: "Option 1",
            value: "option1",
        },
        {
            label: "Option 2",
            value: "option2",
        },
    ],
    placeholder: "Placeholder",
});
