import { ButtonHTMLAttributes, CSSProperties, MouseEvent } from "react";
import { ButtonSize, ButtonVariant, CoreButtonProps } from "@peersyst/react-components-core";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
    CoreButtonProps & {
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
    };

export interface ButtonRootProps {
    isLoading: boolean | undefined;
    variant: ButtonVariant;
    size: ButtonSize;
    fullWidth: boolean;
    color?: string;
}
