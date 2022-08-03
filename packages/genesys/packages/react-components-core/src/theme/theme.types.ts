/* eslint-disable @typescript-eslint/no-empty-interface */
import { JSXElementConstructor } from "react";
import { OverridableStringUnion } from "@peersyst/react-types";

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
export type ThemeTypography<T> = Record<
    OverridableStringUnion<TypographyVariants, TypographyVariantsOverrides>,
    T
>;

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

export interface DefaultThemeZIndex {
    header: number;
    appBar: number;
    popover: number;
    modal: number;
    selectMenu: number;
    toast: number;
}
export interface ThemeZIndex extends DefaultThemeZIndex {}

export interface CoreThemeTypes {}

export type TypographyType = CoreThemeTypes extends { TypographyType: infer T } ? T : any;
export type UnitsType = CoreThemeTypes extends { UnitsType: infer T } ? T : any;

export interface BaseCoreTheme {
    icons: ThemeIcons;
    typography: ThemeTypography<TypographyType>;
    fonts?: ThemeFonts;
    palette: ThemePalette;
    borderRadius: UnitsType;
    zIndex: ThemeZIndex;
}
export interface CoreTheme extends BaseCoreTheme {}
export interface Theme extends CoreTheme {}
