import { FC, PropsWithChildren } from "react";
import { Config, ConfigProvider as CoreConfigProvider } from "@peersyst/react-components-core";
import { ThemeProvider } from "../theme";
import { GlobalStylesProvider } from "./globalStyles";
import { StylesheetProvider } from "@peersyst/react-native-styled";
import stylesheets from "./stylesheets";

// TODO: Remove GlobalStylesProvider
const ConfigProvider: FC<PropsWithChildren<{ config: Config }>> = ({ config, children }) => {
    return (
        <CoreConfigProvider config={config}>
            <ThemeProvider>
                <StylesheetProvider stylesheets={stylesheets}>
                    <GlobalStylesProvider>{children}</GlobalStylesProvider>
                </StylesheetProvider>
            </ThemeProvider>
        </CoreConfigProvider>
    );
};

export default ConfigProvider;
