import { OverridableStringUnion } from "@peersyst/react-types";
import { ReactElement, ReactNode } from "react";
import { ThemeColor } from "../theme";

//TODO: Reset
export type ButtonType = "button" | "submit" | "reset";

export interface ButtonSizeOverrides {}
export type ButtonSize = OverridableStringUnion<"sm" | "md" | "lg", ButtonSizeOverrides>;

export interface ButtonVariantOverrides {}
export type ButtonVariant = OverridableStringUnion<
    "filled" | "outlined" | "text",
    ButtonVariantOverrides
>;

export interface CoreButtonProps {
    /**
     * Button type
     */
    type?: ButtonType;
    /**
     * Additional form action
     */
    action?: string;
    /**
     * Display a loading spinner.
     */
    loading?: boolean;
    /**
     * Disables button
     */
    disabled?: boolean;
    /**
     * Content for the button's loading state
     */
    loadingElement?: ReactElement;
    /**
     * Button variant.
     */
    variant?: ButtonVariant;
    /**
     * Button size
     */
    size?: ButtonSize;
    /**
     * Button is full width
     * @default false
     */
    fullWidth?: boolean;
    /**
     * Button's content
     */
    children?: ReactNode;
    /**
     * Button color
     */
    color?: ThemeColor;
}
