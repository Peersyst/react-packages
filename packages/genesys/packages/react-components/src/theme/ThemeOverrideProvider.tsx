import {
    ThemeOverrideProvider as CoreThemeOverrideProvider,
    ThemeOverrideProviderProps,
} from "@peersyst/react-components-core";
import { ThemeProvider as StyledComponentsProvider } from "styled-components";

const ThemeOverrideProvider = ({
    theme: themeKey,
    children,
}: ThemeOverrideProviderProps): JSX.Element => (
    <CoreThemeOverrideProvider theme={themeKey}>
        {(theme) => <StyledComponentsProvider theme={theme}>{children}</StyledComponentsProvider>}
    </CoreThemeOverrideProvider>
);

export default ThemeOverrideProvider;
