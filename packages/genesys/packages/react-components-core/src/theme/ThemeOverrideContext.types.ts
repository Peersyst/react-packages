import { Theme } from "./theme.types";
import { Themes } from "../config";
import { ReactNode } from "react";

export interface ThemeOverrideContextType {
    theme: Theme;
}

export interface ThemeOverrideProviderProps {
    theme?: keyof Themes;
    overrides?: (theme: Theme) => Theme;
    children?: ReactNode | ((theme: Theme) => ReactNode);
}
