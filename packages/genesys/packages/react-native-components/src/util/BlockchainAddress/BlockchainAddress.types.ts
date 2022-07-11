import { OverridableStringUnion } from "@peersyst/react-types";
import { HashEllipsis } from "@peersyst/react-utils";
import { TypographyProps } from "../../display/Typography";
import {
    BlockchainLinksTypes,
    BlockchainLinksTypesOverrides,
} from "@peersyst/react-components-core";

export interface BlockchainAddressProps
    extends Omit<TypographyProps, "numberOfLines" | "children"> {
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
    ellipsis?: HashEllipsis;
}
