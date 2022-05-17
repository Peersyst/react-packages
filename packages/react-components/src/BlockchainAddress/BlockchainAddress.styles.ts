import styled from "styled-components";
import { BlockchainAddressRootProps, BlockchainAddressTextProps } from "./BlockchainAddress.types";
import { Row } from "../Row";
import { Typography } from "../Typography";

export const BlockchainAddressRoot = styled(Row).attrs({
    alignItems: "center",
})<BlockchainAddressRootProps>`
    width: ${(p) => p.autoLength && "100%"};
`;

export const BlockchainAddressText = styled(Typography)<BlockchainAddressTextProps>`
    word-break: ${(p) => p.break && "break-word"};
`;
