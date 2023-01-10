import { NumericInputProps } from "./NumericInput.types";
import {
    useComponentConfig,
    useMergeDefaultProps,
    useNumericInput,
} from "@peersyst/react-components-core";
import { TextInput } from "react-native";

const NumericInput = (props: NumericInputProps): JSX.Element => {
    const {
        value: valueProp,
        defaultValue,
        onChangeText: onChangeProp,
        ...rest
    } = useMergeDefaultProps("NumericInput", props);
    const maxDecimals = useComponentConfig("NumericInput").maxDecimals;

    const { value, onChange } = useNumericInput({
        defaultValue,
        value: valueProp,
        onChange: onChangeProp,
        maxDecimals,
    });

    return <TextInput value={value} onChangeText={onChange} keyboardType="numeric" {...rest} />;
};

export default NumericInput;
