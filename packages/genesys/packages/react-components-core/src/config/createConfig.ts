import { Config } from "./config.types";
import { deepmerge } from "@peersyst/react-utils";
import createThemes from "../theme/createThemes";
import { CreateConfig } from "./createConfig.types";
import { Loosen } from "@peersyst/react-types";

export default function createConfigCore(
    {
        theme: defaultTheme,
        themes: defaultThemes,
        translate: defaultTranslate,
        validators: defaultValidators,
        components: defaultComponents,
        locale: defaultLocale,
        ...restDefaults
    }: Loosen<Omit<Config, "projectName">, "theme">,
    { theme, themes, translate, validators, components, locale, ...extraConfig }: CreateConfig,
): Config {
    return {
        theme: theme || defaultTheme,
        themes: createThemes(defaultThemes, themes),
        translate: translate || defaultTranslate,
        locale: locale || defaultLocale,
        validators: { ...defaultValidators, ...validators },
        components: deepmerge(defaultComponents, components || {}),
        ...deepmerge(restDefaults, extraConfig),
    };
}
