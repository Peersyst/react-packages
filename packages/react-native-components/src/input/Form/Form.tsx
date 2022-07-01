import { FormProps } from "./Form.types";
import { Form as CoreForm, useMergeDefaultProps } from "@peersyst/react-components-core";
import { View } from "react-native";

const Form = (props: FormProps): JSX.Element => {
    const { style, children, ...coreProps } = useMergeDefaultProps("Form", props);

    return (
        <CoreForm {...coreProps}>
            <View style={style}>{children}</View>
        </CoreForm>
    );
};

export default Form;
