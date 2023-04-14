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
import { ButtonStyle } from "../../input/Button";
import { SwipeButtonStyle } from "../../input/SwipeButton/SwipeButton.types";

export interface CreateGlobalStylesParams {
    theme: Theme;
    dimensions: ScaledSize;
    safeAreaInsets: EdgeInsets;
}

export type CreateGlobalStyles = (params: CreateGlobalStylesParams) => GlobalStyles;

export type CreateComponentGlobalStyles<S> =
    | ((color: string) => (params: CreateGlobalStylesParams) => S)
    | ((params: CreateGlobalStylesParams) => S);

/**
 * @deprecated
 */
export interface BaseGlobalStyles {
    Alert?: AlertStyle; // Migrated
    Button?: ButtonStyle; // Migrated
    Dialog?: DialogStyle; // Migrated
    Divider?: ViewStyle; // Migrated
    DottedPagination?: DottedPaginationStyle; // Migrated
    FormControlLabel?: FormControlLabelStyle; // Migrated
    FormControlHint?: TextStyle; // Migrated
    FormControlError?: TextStyle; // Migrated
    FormControl?: ViewStyle; // Migrated
    Label?: LabelStyle; // Migrated
    Modal?: ViewStyle; // Migrated
    PagerView?: PagerViewStyle; // Migrated
    Paper?: ViewStyle; // Migrated
    RadioButton?: RadioButtonStyle;
    SwipeButton?: SwipeButtonStyle; // Migrated
    Switch?: SwitchStyle;
    Typography?: TypographyStyle; // Migrated
    Toast?: ToastStyle; // Migrated
}

/**
 * @deprecated
 */
export interface GlobalStyles extends BaseGlobalStyles {}
