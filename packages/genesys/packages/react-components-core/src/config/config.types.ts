/* eslint-disable @typescript-eslint/no-empty-interface */
import { IValidator } from "../Validators";
import { Theme } from "../theme";
import { ComponentsConfig } from "./components.config.types";

export interface CoreConfigTypes {}
export interface ConfigTypes extends CoreConfigTypes {}

export interface ExtraValidators {}

export type TranslateFn = ConfigTypes extends { TranslateFn: infer T }
    ? T
    : (w: string, opts?: Record<string, string>) => string;

export interface CoreThemes {
    default?: Theme;
    light?: Theme;
    dark?: Theme;
}
export interface Themes extends CoreThemes {}

export interface BaseCoreConfig {
    projectName: string;
    themes: Themes;
    translate: TranslateFn;
    locale: string;
    validators: Record<keyof ExtraValidators, IValidator>;
    components: ComponentsConfig;
}
export interface CoreConfig extends BaseCoreConfig {}
export interface Config extends CoreConfig {}
