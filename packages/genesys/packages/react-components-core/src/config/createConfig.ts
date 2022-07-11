import { Config, CoreConfig } from "./config.types";
import { deepmerge } from "@peersyst/react-utils";
import createThemes from "../theme/createThemes";
import { CreateConfig } from "./createConfig.types";

export default function createConfigCore(
    defaultConfig: Omit<CoreConfig, "projectName">,
    { themes, translate, validators, components, ...extraConfig }: CreateConfig,
): Config {
    return {
        themes: createThemes(defaultConfig.themes, themes),
        translate: translate || defaultConfig.translate,
        validators: { ...defaultConfig.validators, ...validators },
        components: deepmerge(defaultConfig.components, components || {}),
        ...extraConfig,
    };
}
