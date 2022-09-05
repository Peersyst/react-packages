import { ReactElement } from "react";
import { AlertType } from "@peersyst/react-components-core";
import { useTheme } from "../../theme";

export default function useGetAlertIcon(type: AlertType | undefined): ReactElement | undefined {
    const {
        icons: { info: Info, warning: Warning, error: Error, success: Success },
        loader: Loader,
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
