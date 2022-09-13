import { FC } from "react";
import { Config, ConfigProvider as CoreConfigProvider } from "@peersyst/react-components-core";
import { ThemeProvider } from "../theme";
import { GlobalStylesProvider } from "./globalStyles";

const ConfigProvider: FC<{ config: Config }> = ({ config, children }) => {
    return (
        <CoreConfigProvider config={config}>
            <ThemeProvider>
                <GlobalStylesProvider>{children}</GlobalStylesProvider>
            </ThemeProvider>
        </CoreConfigProvider>
    );
};

export default ConfigProvider;
