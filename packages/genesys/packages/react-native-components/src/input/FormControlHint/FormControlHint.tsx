import { FormControlHintProps } from "./FormControlHint.types";
import { FormControlHintRoot } from "./FormControlHint.styles";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { useGlobalStyles } from "../../config";

const FormControlHint = (props: FormControlHintProps): JSX.Element => {
    const { hint, style: styleProp, light = true } = useMergeDefaultProps("FormControlHint", props);

    const globalStyle = useGlobalStyles("FormControlHint");
    const style = { ...globalStyle, ...styleProp };

    return (
        <FormControlHintRoot variant="caption" light={light} style={style}>
            {hint}
        </FormControlHintRoot>
    );
};

export default FormControlHint;
