import { CoreAlertProps } from "@peersyst/react-components-core";
import { CSSProperties } from "react";

export interface AlertProps extends CoreAlertProps {
    /**
     * Alert className
     */
    className?: string;
    /**
     * Alert style
     */
    style?: CSSProperties;
}
