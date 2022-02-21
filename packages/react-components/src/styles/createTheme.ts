import { CreateTheme, Theme } from "./styles.types";
import { defaultTheme } from "./defaultTheme";
import { deepmerge } from "@peersyst/react-utils";
import { createBreakpoints } from "./createBreakpoints";

export function createTheme({
    loader,
    icons,
    typography,
    palette,
    breakpoints,
    borderRadius,
    toastAnimation,
    toastPosition,
    zIndex,
    skeletonAnimations,
    translate,
    blockchainLinks,
    ...rest
}: CreateTheme): Theme {
    return {
        loader: loader || defaultTheme.loader,
        icons: { ...defaultTheme.icons, ...icons },
        typography: deepmerge(defaultTheme.typography, typography),
        palette: deepmerge(defaultTheme.palette, palette),
        shadows: defaultTheme.shadows,
        breakpoints: createBreakpoints({
            ...defaultTheme.breakpoints.values,
            ...breakpoints?.values,
        }),
        borderRadius: borderRadius || defaultTheme.borderRadius,
        toastAnimation: toastAnimation || defaultTheme.toastAnimation,
        toastPosition: toastPosition || defaultTheme.toastPosition,
        zIndex: { ...defaultTheme.zIndex, ...zIndex },
        skeletonAnimations: skeletonAnimations || defaultTheme.skeletonAnimations,
        translate: translate || defaultTheme.translate,
        blockchainLinks: { ...defaultTheme.blockchainLinks, ...blockchainLinks },
        ...rest,
    };
}
