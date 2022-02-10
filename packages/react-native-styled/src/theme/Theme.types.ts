import { ReactNode } from "react";

/* eslint-disable-next-line @typescript-eslint/no-empty-interface */
export interface Theme {}

export interface ThemeContextType {
    theme: Theme;
}

export interface ThemeProps {
    /**
     * Theme to be applied
     */
    theme?: Theme;
    children?: ReactNode;
}
