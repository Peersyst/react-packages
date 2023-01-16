import { DialogSize } from "./Dialog.types";

export const DIALOG_SIZES = ["xs", "sm", "md", "lg", "xl"] as const;

export const DIALOG_SIZES_MAP: Record<DialogSize, string> = {
    xs: "444px",
    sm: "600px",
    md: "900px",
    lg: "1200px",
    xl: "1536px",
};
