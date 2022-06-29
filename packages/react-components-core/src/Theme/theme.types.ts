/* eslint-disable @typescript-eslint/no-empty-interface */
import { ValidatorFactory, ValidatorKey } from "../Validators";
import { JSXElementConstructor } from "react";
import { ToastAnimation } from "../Toast";
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
    popover: number;
    modal: number;
    selectMenu: number;
    toast: number;
}

export interface ThemeZIndex extends DefaultThemeZIndex {}

export interface ExtraValidators {}

export type BlockchainLinksTypes = "address" | "tx";
export interface BlockchainLinksTypesOverrides {}
export interface DefaultBlockchainLinks {
    address: string;
    tx: string;
}
export interface BlockchainLinks extends DefaultBlockchainLinks {}

export type TranslateKeys = ValidatorKey | "copied_to_clipboard";
export type TranslateFn<T extends TranslateKeys = TranslateKeys> = (
    w: T,
    opts?: Record<string, string>,
) => string;

export interface CoreTheme<TypographyType, ToastPosition, UnitsType> {
    icons: ThemeIcons;
    typography: ThemeTypography<TypographyType>;
    fonts?: ThemeFonts;
    palette: ThemePalette;
    borderRadius: UnitsType;
    toolbarHeight: UnitsType;
    toastAnimation: ToastAnimation;
    toastPosition: ToastPosition;
    zIndex: ThemeZIndex;
    translate: TranslateFn;
    validators: Record<keyof ExtraValidators, ValidatorFactory<unknown>>;
    blockchainLinks: BlockchainLinks;
}
