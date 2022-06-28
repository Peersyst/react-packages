import { FormControlLabelStyle } from "../FormControlLabel.types";
import { FormControlContextType } from "@peersyst/react-components-core";
import { LabelStyle } from "../../../display/Label";
import useDefaultFormControlLabelStyles from "./useDefaultFormControlLabelStyles";
import getFormControlledComponentStyles from "../../FormControl/util/getFormControlledComponentStyles";

export default function (
    style: FormControlLabelStyle,
    context: FormControlContextType,
): LabelStyle {
    const defaultStyle = useDefaultFormControlLabelStyles();
    return getFormControlledComponentStyles(defaultStyle, style, context);
}
