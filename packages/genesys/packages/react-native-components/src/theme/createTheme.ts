import { defaultTheme } from "./defaultTheme";
import { deepmerge } from "@peersyst/react-utils";
import { createCoreTheme, CreateTheme, Theme } from "@peersyst/react-components-core";

export function createTheme({
    icons,
    typography,
    fonts,
    palette,
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
        shadows: defaultTheme.shadows,
        ...rest,
    };
}
