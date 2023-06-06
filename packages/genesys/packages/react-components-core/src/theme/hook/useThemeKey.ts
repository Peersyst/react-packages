import { Themes, useConfig } from "../../config";

export default function useThemeKey(): keyof Themes | undefined {
    const themeKey = useConfig("theme");
    return themeKey;
}
