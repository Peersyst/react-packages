import { ReactElement } from "react";
import { ToastType } from "../Toast.types";
import { useTheme } from "../../Theme";

export function useGetIcon(type: ToastType | undefined): ReactElement | undefined {
    const {
        theme: {
            icons: { info: Info, warning: Warning, error: Error, success: Success },
            loader: Loader,
        },
    } = useTheme();

    if (!type) return undefined;

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
