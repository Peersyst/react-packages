import { getDecimalSeparator, getGroupSeparator } from "./utils";
import { escapeReplaceAll } from "../../utils";

const formatNumber = (value: string, locale: string) => {
    const digitGroupingSeparator = getGroupSeparator(locale);
    const decimalSeparator = getDecimalSeparator(locale);
    if (value.endsWith(",") || isNaN(Number(value))) return "NaN";
    else if (value === "") return "";
    else {
        const [int, dec] = value.split(".");
        const digitGroupSeparatedInt = int
            .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g)
            ?.join(digitGroupingSeparator);
        return digitGroupSeparatedInt + (value.includes(".") ? decimalSeparator : "") + (dec || "");
    }
};

export const parseNumber = (value: string, digit: string, decimal: string): number => {
    return Number(escapeReplaceAll(escapeReplaceAll(value, digit, ""), decimal, "."));
};

export const recoverNumber = (
    value: string,
    decimalSeparator: string,
    digitGroupingSeparator: string,
    maxDecimals?: number,
): string | undefined => {
    const [int, dec] = value.split(decimalSeparator);
    if (maxDecimals !== undefined && dec && dec.length > maxDecimals) return;
    const rawInt = escapeReplaceAll(int, digitGroupingSeparator, "");
    return rawInt + (value.includes(decimalSeparator) ? "." : "") + (dec || "");
};

export default formatNumber;
