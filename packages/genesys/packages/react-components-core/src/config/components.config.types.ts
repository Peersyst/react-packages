import { ButtonProps, CoreButtonProps } from "../Button";
import { JSXElementConstructor } from "react";

// BlockchainAddress config
export type BlockchainLinksTypes = "address" | "tx" | "nft" | "token";
export interface BlockchainLinksTypesOverrides {}
export interface DefaultBlockchainLinks {
    address: string;
    tx: string;
    nft: string;
    token: string;
}
export interface BlockchainLinks extends DefaultBlockchainLinks {}

export type ExtendedCoreBlockchainAddressConfig<P> = ComponentConfig<P> & {
    blockchainLinks: BlockchainLinks;
};

// Button config
export interface ButtonConfig extends ComponentConfig<ButtonProps> {}

// Dialog config
export type ExtendedCoreDialogConfig<
    P,
    BP extends CoreButtonProps = CoreButtonProps,
> = ComponentConfig<P> & {
    actions: {
        component: JSXElementConstructor<BP>;
    } & Partial<BP>;
};
export interface CoreComponentConfig<P> {
    defaultProps: Partial<P>;
}
export interface ComponentConfig<P> extends CoreComponentConfig<P> {}

export interface CoreComponentsConfig {
    Button: ButtonConfig;
}
export interface ComponentsConfig extends CoreComponentsConfig {}
