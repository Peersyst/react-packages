import { createConfig, ConfigProvider } from "../src";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import playgrounds from "./playgrounds";

const config = createConfig({
  projectName: "playground",
});

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <ConfigProvider config={config}>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            {Object.values(playgrounds).map(({ name, component }) => (
              <Drawer.Screen key={name} name={name} component={component} />
            ))}
          </Drawer.Navigator>
        </NavigationContainer>
      </ConfigProvider>
    </SafeAreaProvider>
  );
}
