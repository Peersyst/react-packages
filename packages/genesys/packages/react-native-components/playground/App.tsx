import { createConfig, ConfigProvider } from "../src";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import playgrounds from "./playgrounds";
import { StylesheetProvider, createStylesheets } from "@peersyst/react-native-styled";
import buttonStylesheet from "./stylesheets/Button.stylesheet";
import textFieldStylesheet from "./stylesheets/TextField.stylesheet";
import textAreaStylesheet from "./stylesheets/TextArea.stylesheet";

const config = createConfig({
    projectName: "playground",
});

const stylesheets = createStylesheets(buttonStylesheet, textFieldStylesheet, textAreaStylesheet);

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <SafeAreaProvider>
            <ConfigProvider config={config}>
                <StylesheetProvider stylesheets={stylesheets}>
                    <NavigationContainer>
                        <Drawer.Navigator initialRouteName="Home">
                            {Object.values(playgrounds).map(({ name, component }) => (
                                <Drawer.Screen key={name} name={name} component={component} />
                            ))}
                        </Drawer.Navigator>
                    </NavigationContainer>
                </StylesheetProvider>
            </ConfigProvider>
        </SafeAreaProvider>
    );
}
