import { Theme } from "@peersyst/react-components-core";
import { ScaledSize, TextStyle, ViewStyle } from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";
import { LabelStyle } from "../../display/Label";
import { FormControlLabelStyle } from "../../input/FormControlLabel";

export interface CreateGlobalStylesParams {
    theme: Theme;
    dimensions: ScaledSize;
    safeAreaInsets: EdgeInsets;
}

export type CreateGlobalStyles = (params: CreateGlobalStylesParams) => GlobalStyles;

export interface BaseGlobalStyles {
    Label?: LabelStyle;
    FormControlLabel?: FormControlLabelStyle;
    FormControlHint?: TextStyle;
    FormControlError?: TextStyle;
    FormControl?: ViewStyle;
}
export interface GlobalStyles extends BaseGlobalStyles {}
