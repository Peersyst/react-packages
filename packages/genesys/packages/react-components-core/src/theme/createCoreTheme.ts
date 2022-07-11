import { BaseCoreTheme } from "./theme.types";
import { CreateCoreTheme } from "./createTheme.types";
import { coreTheme } from "./coreTheme";
import { deepmerge } from "@peersyst/react-utils";

export function createCoreTheme({
    icons,
    typography,
    palette,
    borderRadius,
    zIndex,
    ...rest
}: CreateCoreTheme): BaseCoreTheme {
    return {
        icons: icons,
        typography: typography,
        palette: deepmerge(coreTheme.palette, palette),
        borderRadius: borderRadius,
        zIndex: { ...coreTheme.zIndex, ...zIndex },
        ...rest,
    };
}
