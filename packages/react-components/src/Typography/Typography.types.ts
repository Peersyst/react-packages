import { CSSProperties, ReactNode } from "react";
import { ThemeFonts, TypographyVariants, TypographyVariantsOverrides } from "../styles";
import { Property } from "csstype";
import { CSSObject } from "styled-components";
import { OverridableStringUnion } from "@peersyst/react-types";

export interface TypographyProps {
    /**
     * Typography variant
     */
    variant: OverridableStringUnion<TypographyVariants | "inherit", TypographyVariantsOverrides>;
    /**
     * Typography font
     */
    font?: keyof ThemeFonts;
    /**
     * Text transform css property
     */
    textTransform?: Property.TextTransform;
    /**
     * Font style css property
     */
    fontStyle?: Property.FontStyle;
    /**
     * Text align css property
     */
    textAlign?: Property.TextAlign;
    /**
     * Font weight css property
     */
    fontWeight?: Property.FontWeight;
    /**
     * Text doesn't wrap and shows ellipsis if overflowed
     */
    singleLine?: boolean;
    /**
     * Text is light
     */
    light?: boolean;
    /**
     * Typography className
     */
    className?: string;
    /**
     * Typography style
     */
    style?: CSSProperties;
    /**
     * Text content
     */
    children?: ReactNode;
}

export interface TypographyStyleProps {
    font?: keyof ThemeFonts;
    textTransform: Property.TextTransform;
    fontStyle: Property.FontStyle;
    textAlign: Property.TextAlign;
    fontWeight: Property.FontWeight;
    singleLine: boolean;
    light: boolean;
    variantStyles: CSSObject;
}
