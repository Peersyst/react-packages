import { ReactElement } from "react";
import { CorePaperProps } from "../Paper";

export type AlertType = "info" | "success" | "error" | "warning" | "loading";

export interface CoreAlertProps extends Omit<CorePaperProps, "children"> {
    /**
     * Alert message
     */
    message: string;
    /**
     * Alert message
     */
    type?: AlertType;
    /**
     * Custom Alert icon
     */
    icon?: boolean | ReactElement;
    /**
     * Alert action
     */
    action?: ReactElement;
}

export interface AlertRootProps {
    type?: AlertType;
}
