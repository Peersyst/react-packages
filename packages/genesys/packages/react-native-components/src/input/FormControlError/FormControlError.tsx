import { FormControlErrorProps } from "./FormControlError.types";
import { FormControlErrorRoot } from "./FormControlError.styles";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { useFormControlErrorStyles } from "./hooks";

const FormControlError = (rawProps: FormControlErrorProps): JSX.Element => {
    const props = useMergeDefaultProps("FormControlError", rawProps);

    const { error, style: _style } = props;

    const style = useFormControlErrorStyles(props);

    return <FormControlErrorRoot hint={error} style={style} />;
};

export default FormControlError;
