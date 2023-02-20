import { TextStyle } from "react-native";

export const textStyleKeys = [
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
    "includeFontPadding",
] as const;

export type TextStylesKeys = typeof textStyleKeys[number];

export default function extractTextStyles<T extends TextStyle>(
    styles?: T,
): [TextStyle, Omit<T, TextStylesKeys>] {
    if (!styles) return [{}, {} as Omit<T, TextStylesKeys>];

    return Object.entries(styles).reduce(
        ([textStyles, rest], [key, value]) => {
            if (textStyleKeys.includes(key as TextStylesKeys)) {
                textStyles[key as TextStylesKeys] = value;
            } else {
                rest[key as Exclude<keyof T, TextStylesKeys>] = value;
            }
            return [textStyles, rest];
        },
        [{} as TextStyle, {} as Omit<T, TextStylesKeys>],
    );
}
