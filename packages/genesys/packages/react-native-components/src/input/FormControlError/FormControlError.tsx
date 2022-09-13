import { FormControlErrorProps } from "./FormControlError.types";
import { FormControlErrorRoot } from "./FormControlError.styles";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { useGlobalStyles } from "../../config";

const FormControlError = (props: FormControlErrorProps): JSX.Element => {
    const { error, style: styleProp } = useMergeDefaultProps("FormControlError", props);

    const globalStyle = useGlobalStyles("FormControlError");
    const style = { ...globalStyle, ...styleProp };

    return <FormControlErrorRoot hint={error} style={style} />;
};

export default FormControlError;
