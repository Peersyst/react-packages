/* eslint-disable @typescript-eslint/no-empty-interface */
import { ShadowPropTypesIOSStatic, TextStyle } from "react-native";
import { ToastPosition } from "../feedback/Toast";
import { CoreTheme } from "@peersyst/react-components-core";

export type Shadow = ShadowPropTypesIOSStatic & { elevation?: number | undefined };

export interface DefaultTheme extends CoreTheme<TextStyle, ToastPosition, number> {
    shadows: Shadow[];
}
export interface Theme extends DefaultTheme {}
