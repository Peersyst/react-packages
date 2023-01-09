import { NumericInputProps } from "./NumericInput.types";
import {
    useComponentConfig,
    useMergeDefaultProps,
    useNumericInput,
} from "@peersyst/react-components-core";
import { TextField } from "../TextInput";

const NumericInput = (props: NumericInputProps): JSX.Element => {
    const {
        value: valueProp,
        defaultValue,
        onChange: onChangeProp,
        ...rest
    } = useMergeDefaultProps("NumericInput", props);
    const maxDecimals = useComponentConfig("NumericInput").maxDecimals;

    const { value, onChange } = useNumericInput({
        defaultValue,
        value: valueProp,
        onChange: onChangeProp,
        maxDecimals,
    });

    return <TextField value={value} onChange={onChange} keyboardType="numeric" {...rest} />;
};

export default NumericInput;
