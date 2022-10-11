import { Theme } from "@peersyst/react-components-core";
import { ScaledSize, TextStyle, ViewStyle } from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";
import { TypographyStyle } from "src/display/Typography";
import { LabelStyle } from "../../display/Label";
import { FormControlLabelStyle } from "../../input/FormControlLabel";
import { PagerViewStyle } from "../../display/PagerView";
import { DottedPaginationStyle } from "../../navigation/DottedPagination";
import { SwitchStyle } from "src/input/Switch/Switch.types";

export interface CreateGlobalStylesParams {
    theme: Theme;
    dimensions: ScaledSize;
    safeAreaInsets: EdgeInsets;
}

export type CreateGlobalStyles = (params: CreateGlobalStylesParams) => GlobalStyles;

export interface BaseGlobalStyles {
    DottedPagination?: DottedPaginationStyle;
    FormControlLabel?: FormControlLabelStyle;
    FormControlHint?: TextStyle;
    FormControlError?: TextStyle;
    FormControl?: ViewStyle;
    Label?: LabelStyle;
    PagerView?: PagerViewStyle;
    Paper?: ViewStyle;
    Typography?: TypographyStyle;
    Divider?: ViewStyle;
    Switch?: SwitchStyle;
}
export interface GlobalStyles extends BaseGlobalStyles {}
