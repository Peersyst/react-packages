import styled from "styled-components";

export const TextAreaInput = styled.textarea`
    box-sizing: border-box;
    border-radius: ${(props) => props.theme.borderRadius};
    width: 100%;
    height: 100px;
    padding: 10px 5px;
    resize: none;
    border: none;
    outline: none;
    background-color: transparent;
`;
