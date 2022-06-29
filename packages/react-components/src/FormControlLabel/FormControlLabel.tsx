import { LabelProps } from "../Label";
import { useFormControl } from "@peersyst/react-components-core";
import { cx } from "@peersyst/react-utils";
import { FormControlLabelRoot } from "./FormControlLabel.styles";

const FormControlLabel = ({ className, ...labelProps }: LabelProps): JSX.Element => {
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
