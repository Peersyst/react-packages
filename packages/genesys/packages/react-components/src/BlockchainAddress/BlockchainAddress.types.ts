import {
    BlockchainLinksTypes,
    BlockchainLinksTypesOverrides,
} from "@peersyst/react-components-core";
import { OverridableStringUnion } from "@peersyst/react-types";
import { HashProps } from "../Hash";

export type BlockchainAddressProps = Omit<HashProps, "url" | "hash"> & {
    /**
     * Blockchain address
     */
    address: string;
    /**
     * Blockchain address type
     */
    type: OverridableStringUnion<BlockchainLinksTypes, BlockchainLinksTypesOverrides>;
    /**
     * Enable address link
     */
    link?: boolean;
};

export interface BlockchainAddressRootProps {
    autoLength: boolean;
}

export interface BlockchainAddressTextProps {
    break: boolean;
}
