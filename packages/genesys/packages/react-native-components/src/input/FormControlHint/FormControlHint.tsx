import { FormControlHintProps } from "./FormControlHint.types";
import { FormControlHintRoot } from "./FormControlHint.styles";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const FormControlHint = (props: FormControlHintProps): JSX.Element => {
    const { hint, style, light = true } = useMergeDefaultProps("FormControlHint", props);

    return (
        <FormControlHintRoot variant="caption" light={light} style={style}>
            {hint}
        </FormControlHintRoot>
    );
};

export default FormControlHint;
