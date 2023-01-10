import { Config } from "@peersyst/react-components-core";
import { darkTheme, defaultTheme, lightTheme } from "../theme";
import componentsConfig from "./components.config";

const defaultConfig: Omit<Config, "projectName"> = {
    themes: { default: defaultTheme, light: lightTheme, dark: darkTheme },
    translate: (w: string) => w,
    locale: "en",
    validators: {},
    components: componentsConfig,
    globalStyles: () => ({}),
};

export default defaultConfig;
