import { useComputeStyles } from "../../../hooks";
import { RadioButtonProps, RadioButtonStyle } from "../RadioButton.types";

export default function useRadioButtonStyles(props: RadioButtonProps): RadioButtonStyle {
    return useComputeStyles("RadioButton", props, undefined, { bypass: true });
}
