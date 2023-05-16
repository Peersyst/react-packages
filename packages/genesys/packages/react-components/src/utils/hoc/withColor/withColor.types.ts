import { ThemeColor } from "@peersyst/react-components-core";

export interface WithColorProps {
    color?: string;
}

export interface ThemeColorProps {
    /*
     * Color prop
     */
    color?: ThemeColor;
}

export type WithColor<TProps> = TProps & ThemeColorProps;
