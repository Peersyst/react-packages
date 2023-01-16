import { BlockchainLinks, ComponentConfig } from "./config.types";
import { CoreButtonProps } from "../Button";
import { JSXElementConstructor } from "react";

export type ExtendedCoreBlockchainAddressConfig<P> = ComponentConfig<P> & {
    blockchainLinks: BlockchainLinks;
};

export type ExtendedCoreDialogConfig<
    P,
    BP extends CoreButtonProps = CoreButtonProps,
> = ComponentConfig<P> & {
    actions: {
        component: JSXElementConstructor<BP>;
    } & Partial<BP>;
};
