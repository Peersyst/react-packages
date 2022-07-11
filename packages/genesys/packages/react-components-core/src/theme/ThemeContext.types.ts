import { Themes } from "../config";
import { Theme } from "./theme.types";
import { ReactNode } from "react";

export interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: keyof Themes) => void;
}

export interface ThemeProviderProps {
    systemColorScheme: "light" | "dark";
    storageTheme: keyof Themes | null;
    setStorageTheme: (theme: keyof Themes) => any;
    onThemeChange?: (key: keyof Themes, theme: Theme) => any;
    children?: ReactNode | ((theme: Theme) => ReactNode);
}
