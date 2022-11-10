import { FC, PropsWithChildren } from "react";
import { Config, ConfigProvider as CoreConfigProvider } from "@peersyst/react-components-core";
import { ThemeProvider } from "../theme";

const ConfigProvider: FC<PropsWithChildren<{ config: Config }>> = ({ config, children }) => (
    <CoreConfigProvider config={config}>
        <ThemeProvider>{children}</ThemeProvider>
    </CoreConfigProvider>
);

export default ConfigProvider;
