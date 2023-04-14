import { createConfig } from "@peersyst/react-native-components";
import lightTheme from "./theme/lightTheme";
import darkTheme from "./theme/darkTheme";

export default createConfig({
    projectName: "playground",
    themes: {
        default: lightTheme,
        light: lightTheme,
        dark: darkTheme,
    },
});
