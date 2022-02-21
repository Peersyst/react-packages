import { TypographyProps } from "../Typography";
import { OverridableStringUnion } from "@peersyst/react-types";
import { BlockchainLinksTypes, BlockchainLinksTypesOverrides } from "../styles";

export type BlockchainAddressEllipsis = "middle" | "end";

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
    length?: number;
    /**
     * If ellipsis should be in the middle or end
     */
    ellipsis?: BlockchainAddressEllipsis;
}
