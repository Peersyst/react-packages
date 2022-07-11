import { Theme } from "../theme.types";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function (): Theme {
    return useContext(ThemeContext).theme;
}
