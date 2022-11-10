import {FC, PropsWithChildren, useEffect, useState} from "react";
import {
    Themes,
    useConfig,
    ThemeProvider as CoreThemeProvider,
} from "@peersyst/react-components-core";
import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeProvider as StyledComponentsProvider } from "@peersyst/react-native-styled";

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const projectName = useConfig("projectName");
    const storageKey = projectName + "-theme";
    const systemColorScheme = useColorScheme();
    const [storageTheme, setStorageTheme] = useState<keyof Themes | null>(null);

    useEffect(() => {
        (async () => setStorageTheme((await AsyncStorage.getItem(storageKey)) as keyof Themes))();
    }, []);

    const handleSetStorageTheme = (theme: keyof Themes) => AsyncStorage.setItem(storageKey, theme);

    return (
        <CoreThemeProvider
            systemColorScheme={systemColorScheme || "light"}
            storageTheme={storageTheme}
            setStorageTheme={handleSetStorageTheme}
        >
            {(theme) => (
                <StyledComponentsProvider theme={theme}>{children}</StyledComponentsProvider>
            )}
        </CoreThemeProvider>
    );
};

export default ThemeProvider;
