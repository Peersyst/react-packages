import { BlockchainLinks, ComponentConfig } from "./config.types";

export type ExtendedCoreBlockchainAddressConfig<P> = ComponentConfig<P> & {
    blockchainLinks: BlockchainLinks;
};
