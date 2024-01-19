import { ReactNode } from "react";
import * as React from "react";

export type BadgePosition = { horizontal?: "left" | "right"; vertical?: "bottom" | "top" };
export type BadgeOverlap = "circular" | "rectangular";

export interface BadgeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "content"> {
    /**
     * Badge position
     */
    position?: BadgePosition;
    /**
     * Badge content
     */
    content?: ReactNode;
    /**
     * The badge will be added relative to this node.
     */
    children: ReactNode;
    /**
     * If the badge should be hidden
     */
    invisible?: boolean;
    /**
     * Max count to show
     */
    max?: number;
    /**
     * Wrapped shape the badge should overlap.
     */
    overlap?: BadgeOverlap;
    /**
     * If Badge should be visible when content is 0
     */
    showZero?: boolean;
}

export interface BadgeItemProps {
    position: Required<BadgePosition>;
    overlap: NonNullable<BadgeProps["overlap"]>;
    hasContent: boolean;
}
