import { FormControlHintProps } from "./FormControlHint.types";
import { FormControlHintRoot } from "./FormControlHint.styles";
import { cx } from "@peersyst/react-utils";

const FormControlHint = ({ hint, className, style }: FormControlHintProps): JSX.Element => (
    <FormControlHintRoot className={cx("FormControlHint", className)} style={style}>
        {hint}
    </FormControlHintRoot>
);

export default FormControlHint;
