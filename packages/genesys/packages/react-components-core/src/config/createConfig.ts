import { Config } from "./config.types";
import { deepmerge } from "@peersyst/react-utils";
import createThemes from "../theme/createThemes";
import { CreateConfig } from "./createConfig.types";

export default function createConfigCore(
    {
        themes: defaultThemes,
        translate: defaultTranslate,
        validators: defaultValidators,
        components: defaultComponents,
        ...restDefaults
    }: Omit<Config, "projectName">,
    { themes, translate, validators, components, ...extraConfig }: CreateConfig,
): Config {
    return {
        themes: createThemes(defaultThemes, themes),
        translate: translate || defaultTranslate,
        validators: { defaultValidators, ...validators },
        components: deepmerge(defaultComponents, components || {}),
        ...restDefaults,
        ...extraConfig,
    };
}
