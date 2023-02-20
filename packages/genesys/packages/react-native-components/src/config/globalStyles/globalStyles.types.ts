import { Theme } from "@peersyst/react-components-core";
import { ScaledSize, TextStyle, ViewStyle } from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";
import { TypographyStyle } from "../../display/Typography";
import { LabelStyle } from "../../display/Label";
import { FormControlLabelStyle } from "../../input/FormControlLabel";
import { PagerViewStyle } from "../../display/PagerView";
import { DottedPaginationStyle } from "../../navigation/DottedPagination";
import { SwitchStyle } from "../../input/Switch";
import { RadioButtonStyle } from "../../input/RadioButton";
import { AlertStyle } from "../../feedback/Alert";
import { ToastStyle } from "../../feedback/Toast";
import { DialogStyle } from "../../feedback/Dialog";
import { ButtonStyle } from "src/input/Button";

export interface CreateGlobalStylesParams {
    theme: Theme;
    dimensions: ScaledSize;
    safeAreaInsets: EdgeInsets;
}

export type CreateGlobalStyles = (params: CreateGlobalStylesParams) => GlobalStyles;

export type CreateComponentGlobalStyles<S> =
    | ((color: string) => (params: CreateGlobalStylesParams) => S)
    | ((params: CreateGlobalStylesParams) => S);

export interface BaseGlobalStyles {
    Alert?: AlertStyle;
    Button?: ButtonStyle;
    Dialog?: DialogStyle;
    Divider?: ViewStyle;
    DottedPagination?: DottedPaginationStyle;
    FormControlLabel?: FormControlLabelStyle;
    FormControlHint?: TextStyle;
    FormControlError?: TextStyle;
    FormControl?: ViewStyle;
    Label?: LabelStyle;
    Modal?: ViewStyle;
    PagerView?: PagerViewStyle;
    Paper?: ViewStyle;
    RadioButton?: RadioButtonStyle;
    Switch?: SwitchStyle;
    Typography?: TypographyStyle;
    Toast?: ToastStyle;
}
export interface GlobalStyles extends BaseGlobalStyles {}
