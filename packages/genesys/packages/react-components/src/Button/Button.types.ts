import { ButtonHTMLAttributes, CSSProperties, MouseEvent, ReactElement, ReactNode } from "react";
import { OverridableStringUnion } from "@peersyst/react-types";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Disables the button
     */
    disabled?: boolean;
    /**
     * OnClick handler
     */
    onClick?: (e?: MouseEvent<HTMLButtonElement>) => any;
    /**
     * Changes the content for then loadingContent, also disables the button
     */
    loading?: boolean;
    /**
     * Content for the button's loading state
     */
    loadingElement?: ReactElement;
    /**
     * Button size
     */
    size?: ButtonSize;
    /**
     * Button is full width
     */
    fullWidth?: boolean;
    /**
     * Button's className
     */
    className?: string;
    /**
     * Button's style
     */
    style?: CSSProperties;
    /**
     * Button's content
     */
    children?: ReactNode;
}

export interface ButtonStyles {
    isLoading: boolean | undefined;
    size: ButtonSize;
    fullWidth: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ButtonSizeOverrides {}
export type ButtonSize = OverridableStringUnion<"sm" | "md" | "lg", ButtonSizeOverrides>;
