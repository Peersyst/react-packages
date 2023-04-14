/* eslint-disable @typescript-eslint/no-empty-interface */
import "@peersyst/react-native-styled";
import { Theme as RNCTheme } from "@peersyst/react-native-components";

// Custom components theme
declare module "@peersyst/react-native-components" {}

// Type styled components theme with our components theme
declare module "@peersyst/react-native-styled" {
    export interface Theme extends RNCTheme {}
}
