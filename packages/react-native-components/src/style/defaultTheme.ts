import { DefaultTheme } from "./theme.types";
import shadows from "./shadows";
import { typography } from "./typography";
import { coreTheme } from "@peersyst/react-components-core";
import {
    CrossIcon,
    ErrorIcon,
    HideIcon,
    InfoIcon,
    InvalidIcon,
    ShowIcon,
    SuccessIcon,
    WarningIcon,
    CopyIcon,
    CheckIcon,
} from "../assets/icons";

export const defaultTheme: DefaultTheme = {
    ...coreTheme,
    icons: {
        info: InfoIcon,
        error: ErrorIcon,
        success: SuccessIcon,
        warning: WarningIcon,
        invalid: InvalidIcon,
        valid: SuccessIcon,
        hide: HideIcon,
        show: ShowIcon,
        cross: CrossIcon,
        copy: CopyIcon,
        check: CheckIcon,
    },
    typography,
    shadows,
    borderRadius: 5,
    toolbarHeight: 56,
    toastPosition: "top",
};
