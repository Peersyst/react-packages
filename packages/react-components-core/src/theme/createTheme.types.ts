/* eslint-disable @typescript-eslint/no-empty-interface */
import {
    ThemeFonts,
    ThemeIcons,
    ThemePalette,
    ThemeTypography,
    ThemeZIndex,
    TypographyType,
    UnitsType,
} from "./theme.types";
import { DeepPartial } from "@peersyst/react-types";

export type CreateThemePalette = Partial<ThemePalette>;

export interface CreateCoreTheme {
    icons: ThemeIcons;
    typography: ThemeTypography<TypographyType>;
    fonts?: ThemeFonts;
    palette?: CreateThemePalette;
    borderRadius: UnitsType;
    zIndex?: Partial<ThemeZIndex>;
}
export interface CoreCreateTheme extends Omit<Partial<CreateCoreTheme>, "typography" | "icons"> {
    icons?: Partial<CreateCoreTheme["icons"]>;
    typography?: DeepPartial<CreateCoreTheme["typography"]>;
}
export interface CreateTheme extends Partial<CoreCreateTheme> {}
