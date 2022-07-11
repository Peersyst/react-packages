import { PaletteMode } from "@peersyst/react-components-core";
import { StatusBarProps as ExpoStatusBarProps } from "expo-status-bar";

export interface StatusBarProps extends Omit<ExpoStatusBarProps, "backgroundColor"> {
    appearance?: PaletteMode;
}
