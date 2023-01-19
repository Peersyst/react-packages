import { useControlled } from "@peersyst/react-hooks";
import { useLocale } from "../../config";
import { CoreTextInputProps } from "../../TextInput";
import { getGroupSeparator, getDecimalSeparator, formatNumber } from "../utils";
import { parseNumber } from "../utils/formatNumber";
import { escapeReplaceAll } from "../../utils";

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
        if (
            newValue.endsWith(digitGroupingSeparator) ||
            isNaN(parseNumber(newValue, digitGroupingSeparator, decimalSeparator))
        )
            return;
        else if (newValue === "") {
            setValue?.("");
        } else {
            const [int, dec] = newValue.split(decimalSeparator);
            if (maxDecimals !== undefined && dec && dec.length > maxDecimals) return;
            const rawInt = escapeReplaceAll(int, digitGroupingSeparator, "");
            const rawValue =
                rawInt + (newValue.includes(decimalSeparator) ? "." : "") + (dec || "");
            setValue?.(rawValue);
        }
    };

    return {
        value: formatNumber(value, finalLocale),
        onChange,
    };
}
