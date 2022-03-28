import styled from "styled-components";
import { Typography } from "../Typography";
import { BlockchainAddressTextProps } from "./BlockchainAddress.types";

export const BlockchainAddressText = styled(Typography)<BlockchainAddressTextProps>`
    word-break: ${(p) => p.break && "break-word"};
`;
