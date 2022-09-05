import { ReactElement } from "react";

export type AlertType = "info" | "success" | "error" | "warning" | "loading";

export interface CoreAlertProps {
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
