import { OverridableStringUnion } from "@peersyst/react-types";
import { TypographyProps } from "../Typography";
import { BlockchainLinksTypes, BlockchainLinksTypesOverrides } from "../styles";
import { HashProps } from "src/Hash";

export type BlockchainAddressProps = Omit<TypographyProps, "singleLine" | "children"> &
    Omit<HashProps, "url" | "hash"> & {
        /**
         * Blockchain address
         */
        address: string;
        /**
         * Blockchain address type
         */
        type: OverridableStringUnion<BlockchainLinksTypes, BlockchainLinksTypesOverrides>;
    };

export interface BlockchainAddressRootProps {
    autoLength: boolean;
}

export interface BlockchainAddressTextProps {
    break: boolean;
}
