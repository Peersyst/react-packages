import { Theme } from "../theme.types";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { ThemeOverrideContext } from "../ThemeOverrideContext";

export default function (): Theme {
    const overriddenTheme = useContext(ThemeOverrideContext)?.theme;
    const theme = useContext(ThemeContext).theme;
    return overriddenTheme || theme;
}
