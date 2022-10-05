import { createContext } from "react";
import useTheme from "../config/hook/useTheme";
import { ThemeOverrideContextType, ThemeOverrideProviderProps } from "./ThemeOverrideContext.types";

export const ThemeOverrideContext = createContext<ThemeOverrideContextType>({} as any);

export const ThemeOverrideProvider = ({
    theme: themeProp,
    children,
}: ThemeOverrideProviderProps): JSX.Element => {
    const theme = useTheme(themeProp);

    return (
        <ThemeOverrideContext.Provider value={{ theme }}>
            {typeof children === "function" ? children(theme) : children}
        </ThemeOverrideContext.Provider>
    );
};
