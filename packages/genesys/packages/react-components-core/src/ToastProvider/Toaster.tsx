import { useToasterState } from "./hooks/useToasterState";
import { CoreToastProps } from "../Toast";
import { ComponentType, ReactNode } from "react";

export interface ToasterProps<ToastProps> {
    Toast: ComponentType<ToastProps>;
    children: (toast: ReactNode) => JSX.Element;
}

export default function Toaster<P extends CoreToastProps<any> = CoreToastProps<any>>({
    Toast,
    children,
}: ToasterProps<P>): JSX.Element {
    const toast = useToasterState(Toast);

    return children(toast);
}
