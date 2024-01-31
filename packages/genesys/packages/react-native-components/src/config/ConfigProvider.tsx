import { FC, PropsWithChildren, ReactNode } from "react";
import { Config, ConfigProvider as CoreConfigProvider } from "@peersyst/react-components-core";
import { ThemeProvider } from "../theme";
import { GlobalStylesProvider } from "./globalStyles";
import { StylesheetProvider } from "@peersyst/react-native-styled";
import stylesheets from "./stylesheets";
import { PortalProvider } from "@gorhom/portal";

interface ConfigProviderProps {
    config: Config;
    /**
     * @deprecated
     */
    storeTheme?: boolean;
    children: ReactNode;
}

// TODO: Remove GlobalStylesProvider
const ConfigProvider: FC<PropsWithChildren<ConfigProviderProps>> = ({
    config,
    storeTheme = false,
    children,
}) => {
    return (
        <CoreConfigProvider config={config}>
            <ThemeProvider storeTheme={storeTheme}>
                <StylesheetProvider stylesheets={stylesheets}>
                    <GlobalStylesProvider>
                        <PortalProvider>{children}</PortalProvider>
                    </GlobalStylesProvider>
                </StylesheetProvider>
            </ThemeProvider>
        </CoreConfigProvider>
    );
};

export default ConfigProvider;
