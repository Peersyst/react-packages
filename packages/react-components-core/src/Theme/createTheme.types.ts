/* eslint-disable @typescript-eslint/no-empty-interface */
import {
    BlockchainLinks,
    ExtraValidators,
    ThemeFonts,
    ThemeIcons,
    ThemePalette,
    ThemeTypography,
    ThemeZIndex,
    TranslateFn,
} from "./theme.types";
import { ValidatorFactory } from "../Validators";
import { ToastAnimation } from "../Toast";

export type CreateThemePalette = Partial<ThemePalette>;

export interface CreateCoreTheme<TypographyType, ToastPosition, UnitsType> {
    icons: ThemeIcons;
    typography: ThemeTypography<TypographyType>;
    fonts?: ThemeFonts;
    palette?: CreateThemePalette;
    borderRadius: UnitsType;
    toolbarHeight: UnitsType;
    toastAnimation?: ToastAnimation;
    toastPosition: ToastPosition;
    zIndex?: Partial<ThemeZIndex>;
    translate?: TranslateFn;
    validators?: Record<keyof ExtraValidators, ValidatorFactory>;
    blockchainLinks?: Partial<BlockchainLinks>;
}

export interface CreateTheme<TypographyType, ToastPosition, UnitsType>
    extends Partial<CreateCoreTheme<TypographyType, ToastPosition, UnitsType>> {}
