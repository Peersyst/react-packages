import { Theme } from "./theme.types";
import { CreateTheme } from "./createTheme.types";
import { defaultTheme } from "./defaultTheme";
import { deepmerge } from "@peersyst/react-utils";
import { createCoreTheme } from "@peersyst/react-components-core";

export function createTheme({
    icons,
    typography,
    fonts,
    palette,
    borderRadius,
    toastAnimation,
    toastPosition,
    zIndex,
    /*skeletonAnimations,*/
    translate,
    toolbarHeight,
    validators,
    blockchainLinks,
    ...rest
}: CreateTheme): Theme {
    return {
        ...createCoreTheme({
            icons: { ...defaultTheme.icons, ...icons },
            typography: deepmerge(defaultTheme.typography, typography),
            fonts,
            palette,
            borderRadius: borderRadius ?? defaultTheme.borderRadius,
            toolbarHeight: toolbarHeight ?? defaultTheme.toolbarHeight,
            toastAnimation,
            toastPosition: toastPosition || defaultTheme.toastPosition,
            zIndex,
            translate,
            validators,
            blockchainLinks,
        }),
        shadows: defaultTheme.shadows,
        ...rest,
    };
}
