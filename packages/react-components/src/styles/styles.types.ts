/* eslint-disable @typescript-eslint/no-empty-interface */
import { JSXElementConstructor } from "react";
import { CSSObject } from "styled-components";
import { Property } from "csstype";
import { ToastAnimation, ToastPosition } from "../Toast";
import { SkeletonAnimation } from "../Skeleton";
import { ValidatorKey, ValidatorFactory } from "../TextInput/Validators";

export type PaletteMode = "light" | "dark";

export interface ThemeIcons {
    info: JSXElementConstructor<any>;
    error: JSXElementConstructor<any>;
    success: JSXElementConstructor<any>;
    warning: JSXElementConstructor<any>;
    hide: JSXElementConstructor<any>;
    show: JSXElementConstructor<any>;
    cross: JSXElementConstructor<any>;
    copy: JSXElementConstructor<any>;
    invalid: JSXElementConstructor<any>;
    valid: JSXElementConstructor<any>;
    check: JSXElementConstructor<any>;
}

export interface TypographyVariant {
    component: string;
    style: CSSObject;
}
export type TypographyVariants =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button";
export interface TypographyVariantsOverrides {}
export interface DefaultThemeTypography {
    h1: TypographyVariant;
    h2: TypographyVariant;
    h3: TypographyVariant;
    h4: TypographyVariant;
    h5: TypographyVariant;
    h6: TypographyVariant;
    subtitle1: TypographyVariant;
    subtitle2: TypographyVariant;
    body1: TypographyVariant;
    body2: TypographyVariant;
    button: TypographyVariant;
    caption: TypographyVariant;
}
export interface ThemeTypography extends DefaultThemeTypography {}

export interface ThemeFonts {}

export interface DefaultThemePalette {
    mode: PaletteMode;
    primary: string;
    disabled: string;
    background: string;
    backdrop: string;
    text: string;
    status: {
        info: string;
        error: string;
        warning: string;
        success: string;
    };
}
export interface ThemePalette extends DefaultThemePalette {}

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

export interface DefaultThemeZIndex {
    popover: number;
    modal: number;
    selectMenu: number;
    toast: number;
}
export interface ThemeZIndex extends DefaultThemeZIndex {}

export type BlockchainLinksTypes = "address" | "tx";
export interface BlockchainLinksTypesOverrides {}
export interface DefaultBlockchainLinks {
    address: string;
    tx: string;
}
export interface BlockchainLinks extends DefaultBlockchainLinks {}

export interface ExtraValidators {}

export type TranslateKeys = ValidatorKey;
export type TranslateFn<T extends TranslateKeys = TranslateKeys> = (
    w: T,
    opts?: Record<string, string>,
) => string;

export interface DefaultTheme {
    loader: JSXElementConstructor<any>;
    icons: ThemeIcons;
    typography: ThemeTypography;
    fonts?: ThemeFonts;
    palette: ThemePalette;
    shadows: string[];
    breakpoints: ThemeBreakpoints;
    borderRadius: Property.BorderRadius;
    skeletonAnimations: SkeletonAnimation;
    toastAnimation: ToastAnimation;
    toastPosition: ToastPosition;
    zIndex: ThemeZIndex;
    translate: TranslateFn;
    validators: Record<keyof ExtraValidators, ValidatorFactory<unknown>>;
    blockchainLinks: BlockchainLinks;
}
export interface Theme extends DefaultTheme {}

export interface CreateDefaultThemeTypography {
    h1?: Partial<TypographyVariant>;
    h2?: Partial<TypographyVariant>;
    h3?: Partial<TypographyVariant>;
    h4?: Partial<TypographyVariant>;
    h5?: Partial<TypographyVariant>;
    h6?: Partial<TypographyVariant>;
    subtitle1?: Partial<TypographyVariant>;
    subtitle2?: Partial<TypographyVariant>;
    body1?: Partial<TypographyVariant>;
    body2?: Partial<TypographyVariant>;
    button?: Partial<TypographyVariant>;
    caption?: Partial<TypographyVariant>;
}
export interface CreateThemeTypography extends CreateDefaultThemeTypography {}

export type CreateThemePalette = Partial<ThemePalette>;

export type CreateThemeBreakpointValues = Partial<ThemeBreakpointValues>;

export interface CreateDefaultTheme {
    loader?: JSXElementConstructor<any>;
    icons?: Partial<ThemeIcons>;
    typography?: CreateThemeTypography;
    fonts?: ThemeFonts;
    palette?: CreateThemePalette;
    shadows?: string[];
    breakpoints?: {
        values: CreateThemeBreakpointValues;
    };
    borderRadius?: Property.BorderRadius;
    skeletonAnimations?: SkeletonAnimation;
    toastAnimation?: ToastAnimation;
    toastPosition?: ToastPosition;
    zIndex?: Partial<ThemeZIndex>;
    blockchainLinks?: Partial<BlockchainLinks>;
    translate?: TranslateFn;
    validators?: Record<keyof ExtraValidators, ValidatorFactory>;
}
export interface CreateTheme extends CreateDefaultTheme {}
