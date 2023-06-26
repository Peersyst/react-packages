import { FormProps } from "./Form.types";
import { Form as CoreForm, useMergeDefaultProps } from "@peersyst/react-components-core";
import { Keyboard, View } from "react-native";

const Form = (props: FormProps): JSX.Element => {
    const { style, children, onSubmit, ...coreProps } = useMergeDefaultProps("Form", props);

    const handleSubmit = (data: any, action?: string) => {
        Keyboard.dismiss();
        onSubmit(data, action);
    };

    return (
        <CoreForm onSubmit={handleSubmit} {...coreProps}>
            <View style={style}>{children}</View>
        </CoreForm>
    );
};

export default Form;
