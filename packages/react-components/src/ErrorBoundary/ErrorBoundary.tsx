import { Component } from "react";
import { ErrorBoundaryProps, ErrorBoundaryState } from "./ErrorBoundary.types";

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState = {
        hasError: false,
    };

    componentDidCatch(error: unknown, info: unknown) {
        this.props.onError?.(error, info);
    }

    render() {
        const { children } = this.props;

        return children;
    }
}
