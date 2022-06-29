/* eslint-disable @typescript-eslint/no-empty-interface */
import { JSXElementConstructor } from "react";
import { CSSObject } from "styled-components";
import { ToastPosition } from "../Toast";
import { SkeletonAnimation } from "../Skeleton";
import { CoreTheme } from "@peersyst/react-components-core";

export interface TypographyVariant {
    component: string;
    style: CSSObject;
}

export type Breakpoint = keyof ThemeBreakpointValues;
export interface BreakpointOverrides {}
export interface DefaultThemeBreakpointValues {
    mobile: number;
    mini: number;
    sm: number;
    md: number;
}
export interface ThemeBreakpointValues extends DefaultThemeBreakpointValues {}
export interface ThemeBreakpoints {
    values: ThemeBreakpointValues;
    /**
     * @param key - A breakpoint key (`xs`, `sm`, etc.) or a screen width number in px.
     * @returns A media query string ready to be used with most styling solutions, which matches screen widths greater than the screen size given by the breakpoint key (inclusive).
     */
    up: (key: Breakpoint | number) => string;
    /**
     * @param key - A breakpoint key (`xs`, `sm`, etc.) or a screen width number in px.
     * @returns A media query string ready to be used with most styling solutions, which matches screen widths less than the screen size given by the breakpoint key (exclusive).
     * @see [API documentation](https://mui.com/customization/breakpoints/#theme-breakpoints-down-key-media-query)
     */
    down: (key: Breakpoint | number) => string;
    /**
     * @param start - A breakpoint key (`xs`, `sm`, etc.) or a screen width number in px.
     * @param end - A breakpoint key (`xs`, `sm`, etc.) or a screen width number in px.
     * @returns A media query string ready to be used with most styling solutions, which matches screen widths greater than
     *          the screen size given by the breakpoint key in the first argument (inclusive) and less than the screen size given by the breakpoint key in the second argument (exclusive).
     */
    between: (start: Breakpoint | number, end: Breakpoint | number) => string;
    /**
     * @param key - A breakpoint key (`xs`, `sm`, etc.) or a screen width number in px.
     * @returns A media query string ready to be used with most styling solutions, which matches screen widths starting from
     *          the screen size given by the breakpoint key (inclusive) and stopping at the screen size given by the next breakpoint key (exclusive).
     */
    only: (key: Breakpoint) => string;
    /**
     * @param key - A breakpoint key (`xs`, `sm`, etc.).
     * @returns A media query string ready to be used with most styling solutions, which matches screen widths stopping at
     *          the screen size given by the breakpoint key (exclusive) and starting at the screen size given by the next breakpoint key (inclusive).
     */
    not: (key: Breakpoint) => string;
}

export interface DefaultTheme extends CoreTheme<TypographyVariant, ToastPosition, string> {
    loader: JSXElementConstructor<any>;
    shadows: string[];
    breakpoints: ThemeBreakpoints;
    skeletonAnimations: SkeletonAnimation;
}
export interface Theme extends DefaultTheme {}
