import { ReactNode } from "react";
import { OverridableStringUnion } from "@peersyst/react-types";

export interface ChipVariantOverrides {}
export type ChipVariant = OverridableStringUnion<"filled" | "outlined", ChipVariantOverrides>;

export interface ChipSizeOverrides {}
export type ChipSize = OverridableStringUnion<"sm" | "md" | "lg", ChipSizeOverrides>;

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
