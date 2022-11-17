import { createContext } from "react";
import useTheme from "../config/hook/useTheme";
import { ThemeOverrideContextType, ThemeOverrideProviderProps } from "./ThemeOverrideContext.types";

export const ThemeOverrideContext = createContext<ThemeOverrideContextType>({} as any);

export const ThemeOverrideProvider = ({
    theme: themeProp,
    overrides,
    children,
}: ThemeOverrideProviderProps): JSX.Element => {
    const theme = useTheme(themeProp);

    const overriddenTheme = overrides ? overrides(theme) : theme;

    return (
        <ThemeOverrideContext.Provider value={{ theme: overriddenTheme }}>
            {typeof children === "function" ? children(overriddenTheme) : children}
        </ThemeOverrideContext.Provider>
    );
};
