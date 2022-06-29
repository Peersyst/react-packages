import { FormControlLabelProps } from "./FormControlLabel.types";
import { useFormControl } from "@peersyst/react-components-core";
import useFormControlLabelStyles from "./hook/useFormControlLabelStyles";
import { Label } from "../../display/Label";

const FormControlLabel = ({
    style: styleProp = {},
    ...rest
}: FormControlLabelProps): JSX.Element => {
    const formControlContext = useFormControl();
    const style = useFormControlLabelStyles(styleProp, formControlContext);

    return <Label style={style} {...rest} />;
};

export default FormControlLabel;
