import { CoreCodeFieldProps } from "@peersyst/react-components-core";
import { FormControlledComponentProps } from "../FormControl";
import { TextInputStyle } from "../TextInput";
import { ViewStyle } from "react-native";

export type CodeFieldStyle = ViewStyle & {
    textFields?: TextInputStyle;
};

export interface CodeFieldProps
    extends FormControlledComponentProps<CoreCodeFieldProps, CodeFieldStyle> {}
