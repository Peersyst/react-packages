import { CSSProperties, ReactNode } from "react";
import { CoreFormProps } from "@peersyst/react-components-core";

export interface FormProps extends CoreFormProps {
    /**
     * Form className
     */
    className?: string;
    /**
     * Form style
     */
    style?: CSSProperties;
    /**
     * Form children
     */
    children: ReactNode;
}
