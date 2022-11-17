import {
    ThemeOverrideProvider as CoreThemeOverrideProvider,
    ThemeOverrideProviderProps,
} from "@peersyst/react-components-core";
import { ThemeProvider as StyledComponentsProvider } from "@peersyst/react-native-styled";

const ThemeOverrideProvider = ({
    children,
    ...coreThemeOverrideProps
}: ThemeOverrideProviderProps): JSX.Element => (
    <CoreThemeOverrideProvider {...coreThemeOverrideProps}>
        {(theme) => (
            <StyledComponentsProvider theme={theme}>
                {typeof children === "function" ? children(theme) : children}
            </StyledComponentsProvider>
        )}
    </CoreThemeOverrideProvider>
);

export default ThemeOverrideProvider;
