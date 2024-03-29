import { ReactNode } from "react";
import { OverridableStringUnion, ReactChild } from "@peersyst/react-types";
import { TypographyVariants, TypographyVariantsOverrides } from "../theme";

export type LabelPlacement = "top" | "left" | "right" | "bottom";

// Only for horizontal placements
export type LabelAlignment = "start" | "end" | "center" | "space-between";

export interface CoreLabelProps {
    label: ReactChild;
    variant?: OverridableStringUnion<TypographyVariants, TypographyVariantsOverrides>;
    placement?: LabelPlacement;
    alignment?: LabelAlignment;
    gap?: number | string;
    children?: ReactNode;
}

export interface LabelTextProps {
    placement: LabelPlacement;
    alignment: LabelAlignment;
    variant?: OverridableStringUnion<TypographyVariants, TypographyVariantsOverrides>;
}

export interface LabelRowRootProps {
    alignment: LabelAlignment;
}
