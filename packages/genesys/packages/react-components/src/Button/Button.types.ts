import { ButtonHTMLAttributes, CSSProperties, MouseEvent } from "react";
import { ButtonSize, ButtonVariant, CoreButtonProps } from "@peersyst/react-components-core";

/**
 * Buttons props omit title in order to make button generic
 */
type CoreAndNativeButtonProps = CoreButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;
declare module "@peersyst/react-components-core" {
    export interface ButtonProps extends CoreAndNativeButtonProps {
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
}

export interface ButtonRootProps {
    isLoading: boolean | undefined;
    variant: ButtonVariant;
    size: ButtonSize;
    fullWidth: boolean;
    color?: string;
}
