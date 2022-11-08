import {
    ThemeOverrideProvider as CoreThemeOverrideProvider,
    ThemeOverrideProviderProps,
} from "@peersyst/react-components-core";
import { ThemeProvider as StyledComponentsProvider } from "@peersyst/react-native-styled";

const ThemeOverrideProvider = ({
    theme: themeKey,
    children,
}: ThemeOverrideProviderProps): JSX.Element => (
    <CoreThemeOverrideProvider theme={themeKey}>
        {/* @ts-ignore */}
        {(theme) => <StyledComponentsProvider theme={theme}>{children}</StyledComponentsProvider>}
    </CoreThemeOverrideProvider>
);

export default ThemeOverrideProvider;
