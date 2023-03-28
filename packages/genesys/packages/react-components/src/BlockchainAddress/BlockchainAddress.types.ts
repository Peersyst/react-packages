import {
    BlockchainLinksTypes,
    BlockchainLinksTypesOverrides,
} from "@peersyst/react-components-core";
import { OverridableStringUnion } from "@peersyst/react-types";
import { HashProps } from "../Hash";

export type BlockchainAddressProps = Omit<HashProps, "url" | "hash" | "hashToShareData"> & {
    /**
     * Blockchain address
     */
    address: string;
    /**
     * Blockchain address type
     */
    type: OverridableStringUnion<BlockchainLinksTypes, BlockchainLinksTypesOverrides>;
    /**
     * Address to shareData mapper
     */
    addressToShareData?: HashProps["hashToShareData"];
};

export interface BlockchainAddressRootProps {
    autoLength: boolean;
}

export interface BlockchainAddressTextProps {
    break: boolean;
}
