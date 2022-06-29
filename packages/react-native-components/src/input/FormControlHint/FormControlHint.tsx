import { FormControlHintProps } from "./FormControlHint.types";
import { FormControlHintRoot } from "./FormControlHint.styles";

const FormControlHint = ({ hint, style }: FormControlHintProps): JSX.Element => (
    <FormControlHintRoot variant="caption" light style={style}>
        {hint}
    </FormControlHintRoot>
);

export default FormControlHint;
