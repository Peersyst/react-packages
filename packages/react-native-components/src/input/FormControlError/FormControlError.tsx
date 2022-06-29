import { FormControlErrorProps } from "./FormControlError.types";
import { FormControlErrorRoot } from "./FormControlError.styles";

const FormControlError = ({ error, style }: FormControlErrorProps): JSX.Element => (
    <FormControlErrorRoot hint={error} style={style} />
);

export default FormControlError;
