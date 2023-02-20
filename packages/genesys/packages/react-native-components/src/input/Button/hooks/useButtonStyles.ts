import { TextStyle, ViewStyle } from "react-native";
import { extractTextStyles } from "@peersyst/react-native-utils";
import { ButtonRootStyle, ButtonStyle, ButtonTextStyle } from "../Button.types";
import { useMemo } from "react";
import useButtonDefaultStyle from "./useButtonDefaultStyle.ts";
import { useGlobalStyles } from "../../../config";
import { StyleFlags } from "../../../utils";
import { useMergeStyles } from "../../../hooks";

export interface UseButtonStylesResult {
    textStyle: TextStyle;
    rootStyle: Omit<ButtonStyle, keyof TextStyle> & ViewStyle;
}

export default function useButtonStyles(
    style: ButtonStyle,
    color: string | undefined,
    {
        filled,
        outlined,
        text,
        sm,
        md,
        lg,
        pressed,
        disabled,
    }: StyleFlags<
        ButtonStyle,
        "filled" | "outlined" | "text" | "sm" | "md" | "lg" | "pressed" | "disabled"
    >,
): [ButtonRootStyle, ButtonTextStyle] {
    const defaultStyle = useButtonDefaultStyle(color);
    const globalStyle = useGlobalStyles("Button");

    const mergedStyles = useMergeStyles([defaultStyle, globalStyle, style], {
        filled,
        outlined,
        text,
        sm,
        md,
        lg,
        pressed,
        disabled,
    });

    return useMemo(() => extractTextStyles(mergedStyles), [mergedStyles]);
}
