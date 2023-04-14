import { FormControlHintProps } from "./FormControlHint.types";
import { FormControlHintRoot } from "./FormControlHint.styles";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { useFormControlHintStyles } from "./hooks";

const FormControlHint = (rawProps: FormControlHintProps): JSX.Element => {
    const props = useMergeDefaultProps("FormControlHint", rawProps);

    const { hint, light = true, style: _style } = props;

    const style = useFormControlHintStyles(props);

    return (
        <FormControlHintRoot variant="caption" light={light} style={style}>
            {hint}
        </FormControlHintRoot>
    );
};

export default FormControlHint;
