import { createContext } from "react";
import useThemes from "../config/hook/useThemes";
import { ThemeOverrideContextType, ThemeOverrideProviderProps } from "./ThemeOverrideContext.types";
import { useTheme } from "./hook";
import { Theme } from "./theme.types";

export const ThemeOverrideContext = createContext<ThemeOverrideContextType>({} as any);

export const ThemeOverrideProvider = ({
    theme: themeProp,
    overrides,
    children,
}: ThemeOverrideProviderProps): JSX.Element => {
    const themes = useThemes();
    const inheritedTheme = useTheme();

    const theme =
        (typeof themeProp === "string" ? themes[themeProp] : themeProp) ||
        (inheritedTheme as Theme);

    const overriddenTheme = overrides ? overrides(theme) : theme;

    return (
        <ThemeOverrideContext.Provider value={{ theme: overriddenTheme }}>
            {typeof children === "function" ? children(overriddenTheme) : children}
        </ThemeOverrideContext.Provider>
    );
};
