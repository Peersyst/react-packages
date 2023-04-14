import { createContext } from "react";
import { Theme } from "../Theme.types";

export interface ThemeContextType {
    theme: Theme;
}

const ThemeContext = createContext<ThemeContextType>({ theme: {} as any });

export default ThemeContext;
