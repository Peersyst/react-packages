import { createContext, useEffect, useState } from "react";
import { ThemeContextType, CoreThemeProviderProps } from "./ThemeContext.types";
import { Themes } from "../config";
import useTheme from "../config/hook/useTheme";
import { useThemeKey } from "./hook";

export const ThemeContext = createContext<ThemeContextType>({} as any);

export const ThemeProvider = ({
    storeTheme,
    systemColorScheme,
    storageTheme,
    setStorageTheme,
    onThemeChange,
    children,
}: CoreThemeProviderProps): JSX.Element => {
    const configTheme = useThemeKey();

    const [themeKey, setThemeKey] = useState(storageTheme || configTheme || systemColorScheme);
    const theme = useTheme(themeKey);

    useEffect(() => {
        if (storeTheme)
            console.warn(
                "[RNC]: Theme storage is deprecated. In v4.0.0 theme will have to be stored externally and provide it via `theme` prop.",
            );
    }, [storeTheme]);

    useEffect(() => {
        if (storageTheme) setThemeKey(storageTheme);
    }, [storageTheme]);

    useEffect(() => {
        if (!storageTheme) setThemeKey(systemColorScheme);
    }, [systemColorScheme]);

    useEffect(() => {
        onThemeChange?.(themeKey, theme);
    }, [themeKey]);

    const setTheme = (newThemeKey: keyof Themes): void => {
        if (storeTheme) {
            setStorageTheme(newThemeKey);
            setThemeKey(newThemeKey);
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {typeof children === "function" ? children(theme) : children}
        </ThemeContext.Provider>
    );
};

export const ThemeConsumer = ThemeContext.Consumer;
