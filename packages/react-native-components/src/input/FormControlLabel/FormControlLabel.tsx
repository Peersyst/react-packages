import { FormControlLabelProps } from "./FormControlLabel.types";
import { useFormControl, useMergeDefaultProps } from "@peersyst/react-components-core";
import useFormControlLabelStyles from "./hook/useFormControlLabelStyles";
import { Label } from "../../display/Label";

const FormControlLabel = (props: FormControlLabelProps): JSX.Element => {
    const { style: styleProp = {}, ...rest } = useMergeDefaultProps("FormControlLabel", props);

    const formControlContext = useFormControl();
    const style = useFormControlLabelStyles(styleProp, formControlContext);

    return <Label style={style} {...rest} />;
};

export default FormControlLabel;
