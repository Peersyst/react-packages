import { defaultTheme } from "./defaultTheme";
import { deepmerge } from "@peersyst/react-utils";
import { createBreakpoints } from "./createBreakpoints";
import { createCoreTheme, CreateTheme, Theme } from "@peersyst/react-components-core";

export function createTheme({
    loader,
    icons,
    typography,
    fonts,
    palette,
    breakpoints,
    borderRadius,
    zIndex,
    ...rest
}: CreateTheme): Theme {
    return {
        ...createCoreTheme({
            icons: { ...defaultTheme.icons, ...icons },
            typography: deepmerge(defaultTheme.typography, typography),
            fonts,
            palette,
            borderRadius: borderRadius ?? defaultTheme.borderRadius,
            zIndex,
        }),
        loader: loader || defaultTheme.loader,
        shadows: defaultTheme.shadows,
        breakpoints: createBreakpoints({
            ...defaultTheme.breakpoints.values,
            ...breakpoints?.values,
        }),
        ...rest,
    };
}
