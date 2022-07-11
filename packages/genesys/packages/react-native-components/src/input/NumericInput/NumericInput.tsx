import { TextInput } from "react-native";
import * as Localization from "expo-localization";
import { NumericInputProps } from "./NumericInput.types";
import { useControlled } from "@peersyst/react-hooks";
import formatValue, { decimalRegExp, digitRegExp } from "./utils/formatValue";
import { useComponentConfig, useMergeDefaultProps } from "@peersyst/react-components-core";

const NumericInput = (props: NumericInputProps): JSX.Element => {
    const {
        value: valueProp,
        defaultValue,
        onChangeText,
        ...rest
    } = useMergeDefaultProps("NumericInput", props);
    const maxDecimals = useComponentConfig("NumericInput").maxDecimals;

    const [value, setValue] = useControlled(defaultValue || "", valueProp, onChangeText);

    const handleChange = (newValue: string): void => {
        //Check if the decimal separator is correct
        if (
            newValue.endsWith(Localization.digitGroupingSeparator) ||
            isNaN(Number(newValue.replace(digitRegExp, "").replace(decimalRegExp, ".")))
        )
            return;
        else if (newValue === "") {
            setValue?.("");
        } else {
            const [int, dec] = newValue.split(Localization.decimalSeparator);
            if (dec && dec.length > maxDecimals) return;
            const rawInt = int.replace(digitRegExp, "");
            const rawValue =
                rawInt +
                (newValue.includes(Localization.decimalSeparator) ? "." : "") +
                (dec || "");
            setValue?.(rawValue);
        }
    };

    return (
        <TextInput
            value={formatValue(value)}
            onChangeText={handleChange}
            keyboardType="numeric"
            {...rest}
        />
    );
};

export default NumericInput;
