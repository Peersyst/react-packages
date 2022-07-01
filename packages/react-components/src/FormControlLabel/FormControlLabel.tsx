import { LabelProps } from "../Label";
import { useFormControl, useMergeDefaultProps } from "@peersyst/react-components-core";
import { cx } from "@peersyst/react-utils";
import { FormControlLabelRoot } from "./FormControlLabel.styles";

const FormControlLabel = (props: LabelProps): JSX.Element => {
    const { className, ...labelProps } = useMergeDefaultProps("FormControlLabel", props);

    const { required, invalid, disabled, readonly, focused, valid } = useFormControl();

    return (
        <FormControlLabelRoot
            className={cx(
                "FormControlLabelRoot",
                required && "Required",
                readonly && "Readonly",
                focused && "Focused",
                invalid && "Invalid",
                valid && "Valid",
                disabled && "Disabled",
                className,
            )}
            {...labelProps}
        />
    );
};

export default FormControlLabel;
