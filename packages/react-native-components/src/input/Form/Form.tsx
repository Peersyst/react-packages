import { FormProps } from "./Form.types";
import { Form as CoreForm } from "@peersyst/react-components-core";
import { View } from "react-native";

const Form = ({ style, children, ...coreProps }: FormProps): JSX.Element => (
    <CoreForm {...coreProps}>
        <View style={style}>{children}</View>
    </CoreForm>
);

export default Form;
