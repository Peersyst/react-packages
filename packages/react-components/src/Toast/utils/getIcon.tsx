import React, { ReactElement } from "react";
import { ToastType } from "../Toast.types";
import { useTheme } from "../../Theme";

export function getIcon(type: ToastType): ReactElement {
    const {
        theme: {
            icons: { info: Info, warning: Warning, error: Error, success: Success },
            loader: Loader,
        },
    } = useTheme();

    switch (type) {
        case "info":
            return <Info />;
        case "warning":
            return <Warning />;
        case "error":
            return <Error />;
        case "success":
            return <Success />;
        case "loading":
            return <Loader />;
    }
}
