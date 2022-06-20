import { CSSProperties, ReactNode } from "react";

export interface FieldState {
    valid?: boolean;
    value: any;
}

export type FormProps = {
    /**
     * onSubmit handler
     */
    onSubmit: (data: any) => any;
    /**
     * onInvalid handler
     */
    onInvalid?: () => any;
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
};

export interface FieldNotification {
    removed?: boolean;
    valid?: boolean;
    name: string;
    value: any;
}

export interface FormContextInterface {
    notifyForm: (notification: FieldNotification) => void;
    valid: boolean;
    submitted: boolean;
}
