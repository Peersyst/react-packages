import { OverridableStringUnion } from "@peersyst/react-types";
import {
    BlockchainLinksTypes,
    BlockchainLinksTypesOverrides,
} from "@peersyst/react-components-core";
import { HashProps } from "../Hash";

export type BlockchainAddressProps = Omit<
    HashProps,
    "numberOfLines" | "children" | "hash" | "hashToSharePayload"
> & {
    /**
     * Blockchain address
     */
    address: string;
    /**
     * Blockchain address type
     */
    type: OverridableStringUnion<BlockchainLinksTypes, BlockchainLinksTypesOverrides>;
    /**
     * Address to sharePayload mapper
     */
    addressToSharePayload?: HashProps["hashToSharePayload"];
};
