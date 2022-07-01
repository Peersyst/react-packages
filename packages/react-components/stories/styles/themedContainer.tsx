// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

import { DocsContainer } from "@storybook/addon-docs";
import { Container } from "./Container.styles";
import { ConfigProvider, createConfig } from "../../src";

const config = createConfig({
    projectName: "genesys",
});

const themedContainer = ({ children, context }) => (
    <DocsContainer context={context}>
        <ConfigProvider config={config}>
            <Container>{children}</Container>
        </ConfigProvider>
    </DocsContainer>
);

export default themedContainer;
