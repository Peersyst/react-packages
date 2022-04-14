import { TypographyProps } from "../Typography";
import { OverridableStringUnion } from "@peersyst/react-types";
import { BlockchainLinksTypes, BlockchainLinksTypesOverrides } from "../styles";
import { BlockchainAddressEllipsis } from "@peersyst/react-utils";

export interface BlockchainAddressProps extends Omit<TypographyProps, "singleLine" | "children"> {
    /**
     * Blockchain address
     */
    address: string;
    /**
     * Blockchain address type
     */
    type: OverridableStringUnion<BlockchainLinksTypes, BlockchainLinksTypesOverrides>;
    /**
     * Address' length in characters
     */
    length?: number | "auto";
    /**
     * If ellipsis should be in the middle or end
     */
    ellipsis?: BlockchainAddressEllipsis;
    /**
     * If address should break
     */
    break?: boolean;
    /**
     * Gap between the address and copy button
     */
    gap?: number;
}

export interface BlockchainAddressRootProps {
    autoLength: boolean;
}

export interface BlockchainAddressTextProps {
    break: boolean;
}
