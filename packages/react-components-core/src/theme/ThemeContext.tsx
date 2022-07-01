import { createContext, useEffect, useState } from "react";
import { ThemeContextType, ThemeProviderProps } from "./ThemeContext.types";
import { Themes } from "../config";
import useTheme from "../config/hook/useTheme";

export const ThemeContext = createContext<ThemeContextType>({} as any);

export const ThemeProvider = ({
    systemColorScheme,
    storageTheme,
    setStorageTheme,
    onThemeChange,
    children,
}: ThemeProviderProps): JSX.Element => {
    const [themeKey, setThemeKey] = useState(storageTheme || systemColorScheme);
    const theme = useTheme(themeKey);

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
        setStorageTheme(newThemeKey);
        setThemeKey(newThemeKey);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {typeof children === "function" ? children(theme) : children}
        </ThemeContext.Provider>
    );
};

export const ThemeConsumer = ThemeContext.Consumer;
