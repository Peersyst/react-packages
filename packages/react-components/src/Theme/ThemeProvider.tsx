import { createContext, useEffect, useState } from "react";
import { ThemeProvider as StyledComponentsProvider } from "styled-components";
import getColorScheme from "./getColorScheme";
import { ColorScheme, ColorSchemeContextType, ThemeProps } from "./Theme.types";
import { lightTheme } from "../styles/lightTheme";
import { darkTheme } from "../styles/darkTheme";
import { defaultTheme } from "../styles/defaultTheme";

const systemColorScheme = getColorScheme();

export const ThemeContext = createContext<ColorSchemeContextType>({
    colorScheme: systemColorScheme,
    setColorScheme: () => undefined,
});

export default function ThemeProvider({
    theme,
    lightTheme: light = lightTheme,
    darkTheme: dark = darkTheme,
    children,
}: ThemeProps): JSX.Element {
    const storageScheme = localStorage.getItem("color-scheme") as ColorScheme | undefined;
    const [colorScheme, setColorScheme] = useState<ColorScheme>(storageScheme || systemColorScheme);

    const usedTheme = theme || (colorScheme === "dark" ? dark : light) || defaultTheme;

    const changeColorScheme = (colorScheme: ColorScheme) => {
        localStorage.setItem("color-scheme", colorScheme);
        setColorScheme(colorScheme);
    };

    const handleColorSchemeChange = (event: MediaQueryListEvent) => {
        document.body.style.backgroundColor = usedTheme.palette.background;
        document.body.style.color = usedTheme.palette.text;
        if (event.matches) {
            setColorScheme("dark");
        } else {
            setColorScheme("light");
        }
    };

    useEffect(() => {
        document.body.style.backgroundColor = usedTheme.palette.background;
        document.body.style.color = usedTheme.palette.text;
        if (!storageScheme) {
            window
                .matchMedia("(prefers-color-scheme: dark)")
                .addEventListener("change", handleColorSchemeChange);
            return () => {
                window
                    .matchMedia("(prefers-color-scheme: dark)")
                    .removeEventListener("change", handleColorSchemeChange);
            };
        }
    }, []);

    return (
        <ThemeContext.Provider
            value={{
                colorScheme,
                setColorScheme: changeColorScheme,
            }}
        >
            <StyledComponentsProvider theme={usedTheme}>{children}</StyledComponentsProvider>
        </ThemeContext.Provider>
    );
}
