import { Component } from "react";
import { ErrorBoundaryProps, ErrorBoundaryState } from "./ErrorBoundary.types";

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState = {
        hasError: false,
    };

    componentDidCatch(error: any, info: any) {
        this.props.onError?.(error, info);
    }

    render() {
        const { children } = this.props;

        return children;
    }
}
