import { ReactNode } from "react";

export interface ErrorBoundaryProps {
    /**
     * onError handler
     */
    onError?: (error: unknown, info: unknown) => unknown;
    /**
     * Boundary content
     */
    children?: ReactNode;
}

export interface ErrorBoundaryState {
    hasError: boolean;
}
