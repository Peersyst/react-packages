/* eslint-disable @typescript-eslint/no-empty-interface */
import { IValidator } from "../Validators";
import { Theme } from "../theme";

export interface CoreConfigTypes {}
export interface ConfigTypes extends CoreConfigTypes {}

export type BlockchainLinksTypes = "address" | "tx" | "nft" | "token";
export interface BlockchainLinksTypesOverrides {}
export interface DefaultBlockchainLinks {
    address: string;
    tx: string;
    nft: string;
    token: string;
}
export interface BlockchainLinks extends DefaultBlockchainLinks {}

export interface ExtraValidators {}

export type TranslateFn = ConfigTypes extends { TranslateFn: infer T }
    ? T
    : (w: string, opts?: Record<string, string>) => string;

export interface CoreComponentConfig<P> {
    defaultProps: Partial<P>;
}
export interface ComponentConfig<P> extends CoreComponentConfig<P> {}
export type ComponentsConfig = CoreConfigTypes extends { ComponentsConfig: infer T }
    ? T
    : Record<string, ComponentConfig<any> & unknown>;

export interface CoreThemes {
    default?: Theme;
    light?: Theme;
    dark?: Theme;
}
export interface Themes extends CoreThemes {}

export interface BaseCoreConfig {
    projectName: string;
    theme?: keyof Themes;
    themes: Themes;
    translate: TranslateFn;
    locale: string;
    validators: Record<keyof ExtraValidators, IValidator>;
    components: ComponentsConfig;
}
export interface CoreConfig extends BaseCoreConfig {}
export interface Config extends CoreConfig {}
