import { FormControlLabelStyle } from "../FormControlLabel.types";
import { FormControlContextType } from "@peersyst/react-components-core";
import { LabelStyle } from "../../../display/Label";
import useDefaultFormControlLabelStyles from "./useDefaultFormControlLabelStyles";
import getFormControlledComponentStyles from "../../FormControl/util/getFormControlledComponentStyles";
import { useGlobalStyles } from "../../../config";

export default function (
    style: FormControlLabelStyle,
    context: FormControlContextType,
): LabelStyle {
    const defaultStyle = useDefaultFormControlLabelStyles();
    const globalStyle = useGlobalStyles("FormControlLabel");
    return getFormControlledComponentStyles(defaultStyle, globalStyle, style, context);
}
