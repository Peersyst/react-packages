import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { ThemeContextType } from "../ThemeContext.types";

export default function (): ThemeContextType["setTheme"] {
    return useContext(ThemeContext).setTheme;
}
