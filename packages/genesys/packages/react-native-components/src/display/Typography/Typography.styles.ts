import styled from "@peersyst/react-native-styled";
import { Text } from "react-native";
import { TypographyRootProps } from "./Typography.types";

export const TypographyRoot = styled(Text)<TypographyRootProps>(
    ({ font, variantStyles, theme, textTransform, textAlign, fontStyle, fontWeight }) => {
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
            fontFamily: getFont(),
            textTransform,
            textAlign,
            fontStyle,
            fontWeight,
        };
    },
);
