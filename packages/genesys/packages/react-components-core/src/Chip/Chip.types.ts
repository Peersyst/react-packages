import { ReactNode } from "react";

export type ChipVariant = "filled" | "outlined";

export type ChipSize = "sm" | "md" | "lg";

export interface CoreChipProps {
    /**
     * Disables chip
     */
    disabled?: boolean;
    /**
     * Whether the Chip should be round
     */
    rounded?: boolean;
    /**
     * Chip variant
     */
    variant?: ChipVariant;
    /**
     * Chip size
     */
    size?: ChipSize;
    /**
     * Chip's label
     */
    label: ReactNode;
    /**
     * Chip's prefix
     */
    prefix?: ReactNode;
    /**
     * Chip's suffix
     */
    suffix?: ReactNode;
}
