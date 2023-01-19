import { ReactElement, ReactNode } from "react";
import { CorePaperProps } from "../Paper";

export type AlertType = "info" | "success" | "error" | "warning" | "loading";

export interface CoreAlertProps extends Omit<CorePaperProps, "children"> {
    /**
     * Alert content
     */
    content: ReactNode;
    /**
     * Alert type (status: "info" | "success" | "error" | "warning" | "loading")
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
