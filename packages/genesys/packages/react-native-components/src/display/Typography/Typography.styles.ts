import styled from "@peersyst/react-native-styled";
import { Text, TextStyle } from "react-native";
import { TypographyStyleProps } from "./Typography.types";

const typographyLightStyle: TextStyle = {
    opacity: 0.7,
};

export const TypographyRoot = styled(Text)<TypographyStyleProps>(
    ({
        light,
        font,
        variantStyles,
        lightStyle,
        theme,
        textTransform,
        textAlign,
        fontStyle,
        fontWeight,
    }) => {
        function getFont() {
            if (font) {
                const returnFont = theme.fonts?.[font];
                if (returnFont) return returnFont;
                else
                    console.error(
                        `[Genesys]: Trying to load ${font} font failed. Please, make sure fonts are defined at the createTheme function.`,
                    );
            }
            return variantStyles.fontFamily;
        }
        return {
            ...variantStyles,
            color: theme.palette.text,
            fontFamily: getFont(),
            textTransform,
            textAlign,
            fontStyle,
            fontWeight,
            ...(light ? { ...typographyLightStyle, ...lightStyle } : {}),
        };
    },
);
