import { FC, useEffect } from "react";
import { Config, ConfigProvider as CoreConfigProvider } from "@peersyst/react-components-core";
import { ThemeProvider } from "../theme";

const ConfigProvider: FC<{ config: Config }> = ({ config, children }) => {
    useEffect(() => {
        (window as any).genesysConfig = config;
    }, []);

    return (
        <CoreConfigProvider config={config}>
            <ThemeProvider>{children}</ThemeProvider>
        </CoreConfigProvider>
    );
};

export default ConfigProvider;
