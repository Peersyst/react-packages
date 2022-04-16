import { PaletteMode } from "../../style";
import { StatusBarProps as ExpoStatusBarProps } from "expo-status-bar";

export interface StatusBarProps extends Omit<ExpoStatusBarProps, "backgroundColor"> {
    appearance?: PaletteMode;
}
