import { ThemeContext } from "./ThemeProvider";
import { ThemeContextType } from "./Theme.types";
import { ThemeContext as StyledComponentsContext } from "styled-components";
import { useContext } from "react";

export function useTheme(): ThemeContextType {
    return {
        ...useContext(ThemeContext),
        theme: useContext(StyledComponentsContext),
    };
}
