import styled from "@peersyst/react-native-styled";
import { Text } from "react-native";
import { TypographyStyleProps } from "./Typography.types";

export const TypographyRoot = styled(Text)<TypographyStyleProps>(
    ({ textTransform, textAlign, fontStyle, fontWeight, light, font, variantStyles, theme }) => {
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
            textTransform,
            textAlign,
            fontStyle,
            fontWeight,
            opacity: light ? 0.7 : 1,
            fontFamily: getFont(),
        };
    },
);
