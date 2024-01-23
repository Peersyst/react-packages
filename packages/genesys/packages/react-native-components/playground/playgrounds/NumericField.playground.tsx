import { TextField, TextFieldProps, Typography, useNumericInput } from "../../src";
import playground from "../playground";
import { View } from "react-native";

export type NumericFieldProps = Omit<TextFieldProps, "input" | "keyboardType"> & {
    maxDecimals?: number;
};

const NumericField = ({ maxDecimals, ...props }: NumericFieldProps) => {
    const { format, parse } = useNumericInput({ maxDecimals });

    return <TextField format={format} parse={parse} {...props} keyboardType="numeric" />;
};

const Wrapper = (props: NumericFieldProps): JSX.Element => {
    return (
        <View style={{ width: 350, height: 200, rowGap: 20 }}>
            <Typography variant="body2">
                Numeric field is used to introduce numbers. To create it you will the TextField and
                the useNumericField hook. Check the playground code.
            </Typography>
            <NumericField label={"Numeric field"} {...props} />
        </View>
    );
};

export default playground("NumericField", Wrapper, {
    required: true,
    style: {
        width: "100%",
    },
    disabled: false,
    readonly: false,
    placeholder: "0",
});
