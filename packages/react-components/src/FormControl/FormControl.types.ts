import { CoreFormControlProps } from "@peersyst/react-components-core";
import { CSSProperties } from "react";
import { LabelProps } from "../Label";

export interface FormControlProps<T = any> extends CoreFormControlProps<LabelProps, T> {
    /**
     * FormControl className
     */
    className?: string;
    /**
     * FormControl style
     */
    style?: CSSProperties;
}

export type FormControlledComponentProps<CoreProps> = CoreProps & {
    /**
     * FormControl className
     */
    className?: string;
    /**
     * FormControl style
     */
    style?: CSSProperties;
};
