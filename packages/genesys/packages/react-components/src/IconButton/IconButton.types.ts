import { CSSProperties, MouseEvent, ReactElement, ButtonHTMLAttributes } from "react";
import { ButtonType, ThemeColor } from "@peersyst/react-components-core";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Button type
     */
    type?: ButtonType;
    /**
     * Additional form action
     */
    action?: string;
    /**
     * Button's icon
     */
    children: ReactElement;
    /**
     * Prop to display a loading spinner.
     */
    loading?: boolean;
    /**
     * Content for the button's loading state
     */
    loadingElement?: ReactElement;
    /**
     * Disables the button
     */
    disabled?: boolean;
    /**
     * OnClick handler
     */
    onClick?: (e: MouseEvent<HTMLButtonElement>) => any;
    /**
     * Icon color
     */
    color?: ThemeColor;
    /**
     * Button's className
     */
    className?: string;
    /**
     * Button's style
     */
    style?: CSSProperties;
}

export interface IconButtonRootProps {
    color: string | undefined;
}
