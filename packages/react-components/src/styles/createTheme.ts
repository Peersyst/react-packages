import { Theme } from "./theme.types";
import { CreateTheme } from "./createTheme.types";
import { defaultTheme } from "./defaultTheme";
import { deepmerge } from "@peersyst/react-utils";
import { createBreakpoints } from "./createBreakpoints";
import { createCoreTheme } from "@peersyst/react-components-core";

export function createTheme({
    loader,
    icons,
    typography,
    fonts,
    palette,
    breakpoints,
    borderRadius,
    toolbarHeight,
    toastAnimation,
    toastPosition,
    zIndex,
    skeletonAnimations,
    translate,
    blockchainLinks,
    validators,
    ...rest
}: CreateTheme): Theme {
    return {
        ...createCoreTheme({
            icons: { ...defaultTheme.icons, ...icons },
            typography: deepmerge(defaultTheme.typography, typography),
            fonts,
            palette,
            borderRadius: borderRadius ?? defaultTheme.borderRadius,
            toastAnimation,
            toastPosition: toastPosition || defaultTheme.toastPosition,
            toolbarHeight: toolbarHeight || defaultTheme.toolbarHeight,
            zIndex,
            translate,
            validators,
            blockchainLinks,
        }),
        loader: loader || defaultTheme.loader,
        shadows: defaultTheme.shadows,
        breakpoints: createBreakpoints({
            ...defaultTheme.breakpoints.values,
            ...breakpoints?.values,
        }),
        skeletonAnimations: skeletonAnimations || defaultTheme.skeletonAnimations,
        ...rest,
    };
}
