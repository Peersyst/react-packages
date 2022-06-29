import { CoreTheme } from "./theme.types";
import { CreateCoreTheme } from "./createTheme.types";
import { coreTheme } from "./coreTheme";
import { deepmerge } from "@peersyst/react-utils";

export function createCoreTheme<TypographyType, ToastPosition, UnitsType>({
    icons,
    typography,
    palette,
    borderRadius,
    toastAnimation,
    toastPosition,
    zIndex,
    translate,
    toolbarHeight,
    validators,
    blockchainLinks,
    ...rest
}: CreateCoreTheme<TypographyType, ToastPosition, UnitsType>): CoreTheme<
    TypographyType,
    ToastPosition,
    UnitsType
> {
    return {
        icons: icons,
        typography: typography,
        palette: deepmerge(coreTheme.palette, palette),
        borderRadius: borderRadius,
        toastAnimation: toastAnimation || coreTheme.toastAnimation,
        toastPosition: toastPosition,
        zIndex: { ...coreTheme.zIndex, ...zIndex },
        translate: translate || coreTheme.translate,
        toolbarHeight: toolbarHeight,
        validators: validators || {},
        blockchainLinks: { ...coreTheme.blockchainLinks, ...blockchainLinks },
        ...rest,
    };
}
