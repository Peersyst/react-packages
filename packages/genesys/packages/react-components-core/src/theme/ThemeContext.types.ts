import { Themes } from "../config";
import { Theme } from "./theme.types";
import { ReactNode } from "react";

export interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: keyof Themes) => void;
}

export interface CoreThemeProviderProps {
    /**
     * @deprecated In v4.0.0 theme will have to be stored externally and provide it via `theme` prop.
     * @default true
     */
    storeTheme?: boolean;
    systemColorScheme: "light" | "dark";
    storageTheme: keyof Themes | null;
    setStorageTheme: (theme: keyof Themes) => any;
    onThemeChange?: (key: keyof Themes, theme: Theme) => any;
    children?: ReactNode | ((theme: Theme) => ReactNode);
}

export interface ThemeProviderProps extends Pick<CoreThemeProviderProps, "storeTheme"> {
    children?: ReactNode;
}
