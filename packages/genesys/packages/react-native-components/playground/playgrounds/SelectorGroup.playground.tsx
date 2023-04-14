import { SelectorGroup, SelectorGroupProps } from "../../src";
import playground from "../playground";
import { View } from "react-native";

const Wrapper = (props: SelectorGroupProps<any>): JSX.Element => {
    return (
        <View style={{ width: 300, height: 200 }}>
            <SelectorGroup {...props} />
        </View>
    );
};

export default playground("SelectorGroup", Wrapper, {
    label: "Label",
    controller: "switch",
    style: {
        width: 300,
        height: 100,
        component: {},
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
});
