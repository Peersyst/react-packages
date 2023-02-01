import { escapeReplaceAll } from "../../utils";

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
