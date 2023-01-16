import { DialogButtonType } from "./Dialog.types";
import { ThemeColor } from "../theme";

export const DIALOG_ACTION_COLOR_MAP: Record<DialogButtonType, ThemeColor> = {
    default: "primary",
    positive: "status.success",
    destructive: "status.error",
};
