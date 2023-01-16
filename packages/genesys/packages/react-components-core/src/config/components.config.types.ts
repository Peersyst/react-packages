import { BlockchainLinks, ComponentConfig } from "./config.types";
import { ButtonVariant } from "../Button";

export type ExtendedCoreBlockchainAddressConfig<P> = ComponentConfig<P> & {
    blockchainLinks: BlockchainLinks;
};

export type ExtendedCoreDialogConfig<P> = ComponentConfig<P> & {
    actions: {
        variant: ButtonVariant;
    };
};
