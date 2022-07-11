import { LabelProps, LabelStyle } from "../../display/Label";
import { FormControlStateStyle } from "../FormControl";

export type FormControlLabelStyle = FormControlStateStyle<LabelStyle>;

export interface FormControlLabelProps extends Omit<LabelProps, "style"> {
    style?: FormControlLabelStyle;
}
