import { Theme } from "../Theme.types";
import { useContext } from "react";
import { ThemeContext } from "../context";

export default function useTheme(): Theme {
    const { theme } = useContext(ThemeContext);

    return theme;
}
