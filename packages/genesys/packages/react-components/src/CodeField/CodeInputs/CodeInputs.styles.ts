import styled from "styled-components";
import { TextField } from "../../TextField";
import { Row } from "../../Row";

export const CodeInputsRoot = styled(Row)`
    width: 100%;
`;

export const CodeInput = styled(TextField)`
    flex: 1;
    input {
        text-align: center;
    }
`;
