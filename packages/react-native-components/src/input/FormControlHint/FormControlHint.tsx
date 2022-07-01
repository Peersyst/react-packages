import { FormControlHintProps } from "./FormControlHint.types";
import { FormControlHintRoot } from "./FormControlHint.styles";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const FormControlHint = (props: FormControlHintProps): JSX.Element => {
    const { hint, style } = useMergeDefaultProps("FormControlHint", props);

    return (
        <FormControlHintRoot variant="caption" light style={style}>
            {hint}
        </FormControlHintRoot>
    );
};

export default FormControlHint;
