import { escapeReplaceAll } from "../../utils";

export function getDecimalSeparator(locale?: string): string {
    const number = 1.1;
    return number.toLocaleString(locale).substring(1, 2);
}

export function getGroupSeparator(locale?: string): string {
    const value = (1000).toLocaleString(locale);
    if (value.length === 5) return value.substring(1, 2);
    return getDecimalSeparator(locale) === "," ? "." : ",";
}

export const formatNumber = (value: string, locale: string, maxDecimals?: number) => {
    const decimalSeparator = getDecimalSeparator(locale);

    let [int, dec = ""] = value.split(".");
    if (value === "-0") int = int.replace("-0", "-");
    return int + (value.includes(".") ? decimalSeparator : "") + dec.substring(0, maxDecimals);
};

export const isNumber = (str: string): boolean => {
    return /^-?\d*\.?\d+$/.test(str);
};

export const parseNumber = (value: string): string => {
    const parsedValue = escapeReplaceAll(value, ",", ".");
    console.log(value, Number(value));
    if (parsedValue.split(".").length > 2) return "NaN";
    else if (parsedValue === "") return "";
    else if (parsedValue === "-") return "-0";
    else if (parsedValue.endsWith(".") && parsedValue.length > 1 && isNumber(parsedValue + "0"))
        return parsedValue;
    else if (isNumber(parsedValue)) return parsedValue;
    else return "NaN";
};
