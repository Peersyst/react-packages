//@ts-nocheck

import { DocsContainer } from "@storybook/addon-docs";
import { ThemeProvider } from "../../src";
import { Container } from "./Container.styles";
import { darkTheme } from "../../src/styles/darkTheme";

const themedContainer = ({ children, context }) => (
    <DocsContainer context={context}>
        <ThemeProvider theme={darkTheme}>
            <Container>{children}</Container>
        </ThemeProvider>
    </DocsContainer>
);

export default themedContainer;
