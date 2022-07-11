import { Loader } from "../Loader";
import shadows from "./shadows";
import { typography } from "./typography";
import { createBreakpoints } from "./createBreakpoints";
import { coreTheme, Theme } from "@peersyst/react-components-core";
import {
    CheckIcon,
    CopyIcon,
    CrossIcon,
    ErrorIcon,
    HideIcon,
    InfoIcon,
    InvalidIcon,
    ShowIcon,
    SuccessIcon,
    WarningIcon,
} from "../assets/icons";

export const defaultTheme: Theme = {
    ...coreTheme,
    icons: {
        info: InfoIcon,
        error: ErrorIcon,
        success: SuccessIcon,
        warning: WarningIcon,
        hide: HideIcon,
        show: ShowIcon,
        cross: CrossIcon,
        invalid: InvalidIcon,
        valid: SuccessIcon,
        check: CheckIcon,
        copy: CopyIcon,
    },
    loader: Loader,
    typography,
    shadows,
    breakpoints: createBreakpoints({
        mobile: 650,
        mini: 767,
        sm: 1100,
        md: 1359,
    }),
    borderRadius: "5px",
};
