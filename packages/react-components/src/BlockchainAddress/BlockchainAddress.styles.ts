import styled from "styled-components";
import { Typography } from "../Typography";
import { Row } from "../Row";
import { BlockchainAddressRootProps, BlockchainAddressTextProps } from "./BlockchainAddress.types";

export const BlockchainAddressRoot = styled(Row).attrs({
    alignItems: "center",
})<BlockchainAddressRootProps>`
    width: ${(p) => p.autoLength && "100%"};
`;

export const BlockchainAddressText = styled(Typography)<BlockchainAddressTextProps>`
    word-break: ${(p) => p.break && "break-word"};
`;
