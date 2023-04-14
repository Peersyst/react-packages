import { ConfigProvider, StatusBar } from "@peersyst/react-native-components";
import Navigator from "./Navigator";
import stylesheets from "../stylesheets";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StylesheetProvider } from "@peersyst/react-native-styled";
import config from "./config";

export default function App() {
    return (
        <SafeAreaProvider>
            <ConfigProvider config={config}>
                <StylesheetProvider stylesheets={stylesheets}>
                    <Navigator />
                    <StatusBar />
                </StylesheetProvider>
            </ConfigProvider>
        </SafeAreaProvider>
    );
}
