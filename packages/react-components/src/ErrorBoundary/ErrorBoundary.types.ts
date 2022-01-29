import { ReactNode } from "react";

export interface ErrorBoundaryProps {
    /**
     * onError handler
     */
    onError?: (error: any, info: any) => unknown;
    /**
     * Boundary content
     */
    children?: ReactNode;
}

export interface ErrorBoundaryState {
    hasError: boolean;
}
