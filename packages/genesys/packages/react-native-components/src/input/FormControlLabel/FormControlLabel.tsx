import { FormControlLabelProps } from "./FormControlLabel.types";
import { useFormControl, useMergeDefaultProps } from "@peersyst/react-components-core";
import { Label } from "../../display/Label";
import { useFormControlLabelStyles } from "./hook";

const FormControlLabel = (rawProps: FormControlLabelProps): JSX.Element => {
    const props = useMergeDefaultProps("FormControlLabel", rawProps);

    const { style: _style, ...rest } = props;

    const formControlContext = useFormControl();

    const style = useFormControlLabelStyles(props, formControlContext);

    return <Label style={style} {...rest} />;
};

export default FormControlLabel;
