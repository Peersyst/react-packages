import { extract } from "@peersyst/react-utils";
import { TextStyle, ViewStyle } from "react-native";

export const textStyleKeys: Readonly<(keyof Omit<TextStyle, keyof ViewStyle>)[]> = [
    "color",
    "fontFamily",
    "fontSize",
    "fontStyle",
    "fontWeight",
    "letterSpacing",
    "lineHeight",
    "textAlign",
    "textDecorationLine",
    "textDecorationStyle",
    "textDecorationColor",
    "textShadowColor",
    "textShadowOffset",
    "textShadowRadius",
    "textTransform",
    "fontVariant",
    "writingDirection",
    "textAlignVertical",
    "verticalAlign",
    "includeFontPadding",
] as const;

export type TextStylesKeys = typeof textStyleKeys[number];

export default function extractTextStyles<T extends TextStyle>(
    styles?: T,
): [TextStyle, Omit<T, TextStylesKeys>] {
    if (!styles) return [{}, {} as Omit<T, TextStylesKeys>];

    return extract(styles, ...textStyleKeys);
}
