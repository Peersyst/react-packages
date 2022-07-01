import { CoreThemes, Themes } from "../config";

export default function (coreThemes: CoreThemes, themes: Partial<Themes> = {}): Themes {
    const { default: defaultTheme, light: lightTheme, dark: darkTheme, ...extraThemes } = themes;

    return {
        default: defaultTheme || coreThemes.default,
        light: lightTheme,
        dark: darkTheme,
        ...extraThemes,
    };
}
