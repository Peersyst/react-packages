import "@peersyst/react-native-styled";
import { Theme as DefaultTheme } from "./theme.types";

declare module "@peersyst/react-native-styled" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface Theme extends DefaultTheme {}
}
