import { FormControlErrorProps } from "./FormControlError.types";
import { FormControlErrorRoot } from "./FormControlError.styles";
import { cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const FormControlError = (props: FormControlErrorProps): JSX.Element => {
    const { error, className, style } = useMergeDefaultProps("FormControlError", props);

    return (
        <FormControlErrorRoot
            hint={error}
            className={cx("FormControlError", className)}
            style={style}
        />
    );
};

export default FormControlError;
