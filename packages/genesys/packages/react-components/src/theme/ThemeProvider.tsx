import { FC, useEffect, useRef, useState } from "react";
import {
    Theme,
    ThemeProvider as CoreThemeProvider,
    Themes,
    useConfig,
} from "@peersyst/react-components-core";
import { ThemeProvider as StyledComponentsProvider } from "styled-components";
import getColorScheme from "./getColorScheme";

const ThemeProvider: FC = ({ children }) => {
    const projectName = useConfig("projectName");
    const storageKey = projectName + "-theme";
    const [systemColorScheme, setSystemColorScheme] = useState(getColorScheme());
    const storageTheme = useRef(
        typeof window !== "undefined"
            ? (localStorage.getItem(storageKey) as keyof Themes | null)
            : null,
    ).current;
    const setStorageTheme = (theme: keyof Themes) => localStorage.setItem(storageKey, theme);

    const handleColorSchemeChange = (event: MediaQueryListEvent) => {
        if (event.matches) {
            setSystemColorScheme("dark");
        } else {
            setSystemColorScheme("light");
        }
    };

    useEffect(() => {
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", handleColorSchemeChange);
        return () => {
            window
                .matchMedia("(prefers-color-scheme: dark)")
                .removeEventListener("change", handleColorSchemeChange);
        };
    }, []);

    const handleThemeChange = (key: keyof Themes, theme: Theme) => {
        document.documentElement.style.backgroundColor = theme.palette.background;
        document.documentElement.style.color = theme.palette.text;
        document.documentElement.style.colorScheme = theme.palette.mode;
    };

    return (
        <CoreThemeProvider
            systemColorScheme={systemColorScheme}
            storageTheme={storageTheme}
            setStorageTheme={setStorageTheme}
            onThemeChange={handleThemeChange}
        >
            {(theme) => (
                <StyledComponentsProvider theme={theme}>{children}</StyledComponentsProvider>
            )}
        </CoreThemeProvider>
    );
};

export default ThemeProvider;
