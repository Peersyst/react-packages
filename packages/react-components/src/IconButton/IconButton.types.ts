import { CSSProperties, MouseEvent, ReactElement } from "react";

export interface IconButtonProps {
    /**
     * Button's icon
     */
    children: ReactElement;
    /**
     * Disables the button
     */
    disabled?: boolean;
    /**
     * OnClick handler
     */
    onClick?: (e?: MouseEvent<HTMLButtonElement>) => any;
    /**
     * Button's className
     */
    className?: string;
    /**
     * Button's style
     */
    style?: CSSProperties;
}

export interface IconButtonStyle {
    disabled: boolean | undefined;
}
