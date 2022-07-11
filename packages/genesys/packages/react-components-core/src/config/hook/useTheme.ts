import { Themes } from "../config.types";
import { Theme } from "../../theme";
import useThemes from "./useThemes";

export default function (theme: keyof Themes): Theme {
    const themes = useThemes();
    return themes[theme] || themes.default!;
}
