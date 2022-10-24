import { ReactNode } from "react";

export interface FieldState {
    valid?: boolean;
    value: any;
}

export interface FormProps {
    /**
     * onSubmit handler
     */
    onSubmit: (data: any) => any;
    /**
     * onInvalid handler
     */
    onInvalid?: () => any;
    /**
     * Form element
     */
    children: ReactNode;
}

export type CoreFormProps = FormProps;

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
    handleSubmit: (action?: string) => any;
}
