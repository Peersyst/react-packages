import { ButtonHTMLAttributes, CSSProperties, MouseEvent, ReactElement, ReactNode } from "react";

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

export type ButtonSize = "sm" | "md" | "lg";
