import { useControlled } from "@peersyst/react-hooks";
import { useLocale } from "../../config";
import { CoreTextInputProps } from "../../TextInput";
import { getGroupSeparator, getDecimalSeparator, formatNumber } from "../utils";
import { parseNumber, recoverNumber } from "../utils/formatNumber";

export type UseNumericInputParams = Pick<
    CoreTextInputProps,
    "value" | "onChange" | "defaultValue"
> & {
    locale?: string;
    maxDecimals?: number;
};
export type UseNumericInputResult = Pick<CoreTextInputProps, "value" | "onChange">;

export default function useNumericInput({
    defaultValue = "",
    value: valueProp,
    onChange: onChangeProp,
    locale,
    maxDecimals,
}: UseNumericInputParams): UseNumericInputResult {
    const [value, setValue] = useControlled(defaultValue, valueProp, onChangeProp);
    const defaultLocale = useLocale();
    const finalLocale = locale || defaultLocale;
    const digitGroupingSeparator = getGroupSeparator(finalLocale);
    const decimalSeparator = getDecimalSeparator(finalLocale);

    const onChange = (newValue: string) => {
        if (newValue.endsWith(digitGroupingSeparator)) {
            const finalNewValue = newValue.substring(0, newValue.length - 1) + decimalSeparator;
            if (
                newValue.length > 1 &&
                !isNaN(parseNumber(finalNewValue, digitGroupingSeparator, decimalSeparator))
            ) {
                const rawValue = recoverNumber(
                    finalNewValue,
                    decimalSeparator,
                    digitGroupingSeparator,
                    maxDecimals,
                );
                if (rawValue) setValue?.(rawValue);
                else return;
            } else return;
        } else if (isNaN(parseNumber(newValue, digitGroupingSeparator, decimalSeparator))) return;
        else if (newValue === "") {
            setValue?.("");
        } else {
            const rawValue = recoverNumber(
                newValue,
                decimalSeparator,
                digitGroupingSeparator,
                maxDecimals,
            );
            if (rawValue) setValue?.(rawValue);
            else return;
        }
    };

    return {
        value: formatNumber(value, finalLocale),
        onChange,
    };
}
