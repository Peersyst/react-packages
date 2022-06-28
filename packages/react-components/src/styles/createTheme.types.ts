/* eslint-disable @typescript-eslint/no-empty-interface */
import { JSXElementConstructor } from "react";
import { SkeletonAnimation } from "../Skeleton";
import { ToastPosition } from "../Toast";
import { ThemeBreakpointValues, TypographyVariant } from "./theme.types";
import { CreateTheme as CoreCreateTheme } from "@peersyst/react-components-core";

export type CreateThemeBreakpointValues = Partial<ThemeBreakpointValues>;

export interface CreateDefaultTheme
    extends CoreCreateTheme<TypographyVariant, ToastPosition, string> {
    loader?: JSXElementConstructor<any>;
    shadows?: string[];
    breakpoints?: {
        values: CreateThemeBreakpointValues;
    };
    skeletonAnimations?: SkeletonAnimation;
}
export interface CreateTheme extends CreateDefaultTheme {}
