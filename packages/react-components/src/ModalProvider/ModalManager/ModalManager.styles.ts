import styled from "styled-components";

export const ModalManagerRoot = styled.div(({ theme }) => ({
    position: "fixed",
    zIndex: theme.zIndex.modal + 1,
}));
