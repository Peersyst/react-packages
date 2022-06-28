import { FormControlErrorProps } from "./FormControlError.types";
import { FormControlErrorRoot } from "./FormControlError.styles";
import { cx } from "@peersyst/react-utils";

const FormControlError = ({ error, className, style }: FormControlErrorProps): JSX.Element => {
    return (
        <FormControlErrorRoot
            hint={error}
            className={cx("FormControlError", className)}
            style={style}
        />
    );
};

export default FormControlError;
