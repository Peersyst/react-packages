import shadows from "./shadows";
import { typography } from "./typography";
import { coreTheme, Theme } from "@peersyst/react-components-core";
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
    ChevronDownIcon,
    ChevronUpIcon,
} from "../assets/icons";

export const defaultTheme: Theme = {
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
        chevronDown: ChevronDownIcon,
        chevronUp: ChevronUpIcon,
    },
    typography,
    shadows,
    borderRadius: 5,
};
