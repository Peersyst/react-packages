import { BlockchainAddressEllipsis } from "@peersyst/react-utils";
import { TypographyProps } from "../Typography";

export interface HashProps extends Omit<TypographyProps, "singleLine" | "children"> {
    /**
     * Hash
     */
    hash: string;
    /**
     * Address' length in characters
     */
    length?: number | "auto" | "complete";
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

export interface HashRootProps {
    autoLength: boolean;
}

export interface HashTextProps {
    break: boolean;
}
