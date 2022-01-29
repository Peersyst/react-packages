import { ReactNode } from "react";
import { Theme } from "../styles";

export type ColorScheme = "light" | "dark";

export interface ColorSchemeContextType {
    colorScheme: ColorScheme;
    setColorScheme: (colorScheme: ColorScheme) => void;
}

export type ThemeContextType = ColorSchemeContextType & { theme: Theme };

export interface ThemeProps {
    /**
     * Theme to be applied
     */
    theme?: Theme;
    /**
     * Light theme when the theme prop is not provided and colorScheme is light
     */
    lightTheme?: Theme;
    /**
     * Dark theme when the theme prop is not provided and colorScheme is dark
     */
    darkTheme?: Theme;
    children?: ReactNode;
}
