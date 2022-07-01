/* eslint-disable @typescript-eslint/no-empty-interface */
import "@peersyst/react-native-styled";
import { Shadow } from "./theme.types";
import "@peersyst/react-components-core";
import { Theme as ComponentsTheme } from "@peersyst/react-components-core";
import { TextStyle } from "react-native";

declare module "@peersyst/react-native-styled" {
    export interface Theme extends ComponentsTheme {}
}

declare module "@peersyst/react-components-core" {
    export interface CoreThemeTypes {
        TypographyType: TextStyle;
        UnitsType: number;
    }

    export interface CoreTheme {
        shadows: Shadow[];
    }

    export interface CoreCreateTheme {
        shadows?: Shadow[];
    }
}
