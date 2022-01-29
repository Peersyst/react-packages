import { useToasterState } from "./hooks/useToasterState";
import React from "react";

export function Toaster(): JSX.Element {
    const toast = useToasterState();

    return <div id="toast-root">{toast}</div>;
}
