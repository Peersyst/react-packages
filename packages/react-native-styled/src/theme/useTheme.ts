import { ThemeContextType } from "./Theme.types";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function useTheme(): ThemeContextType["theme"] {
    const { theme } = useContext(ThemeContext);

    return theme;
}
