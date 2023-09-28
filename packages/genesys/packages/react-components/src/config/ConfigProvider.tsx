import { FC, PropsWithChildren, ReactNode } from "react";
import { Config, ConfigProvider as CoreConfigProvider } from "@peersyst/react-components-core";
import { ThemeProvider } from "../theme";

interface ConfigProviderProps {
    config: Config;
    /**
     * @deprecated
     */
    storeTheme?: boolean;
    children: ReactNode;
}

const ConfigProvider: FC<PropsWithChildren<ConfigProviderProps>> = ({
    config,
    storeTheme = false,
    children,
}) => (
    <CoreConfigProvider config={config}>
        <ThemeProvider storeTheme={storeTheme}>{children}</ThemeProvider>
    </CoreConfigProvider>
);

export default ConfigProvider;
