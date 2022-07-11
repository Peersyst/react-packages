import { FormControlErrorProps } from "./FormControlError.types";
import { FormControlErrorRoot } from "./FormControlError.styles";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const FormControlError = (props: FormControlErrorProps): JSX.Element => {
    const { error, style } = useMergeDefaultProps("FormControlError", props);

    return <FormControlErrorRoot hint={error} style={style} />;
};

export default FormControlError;
