import { FormControlHintProps } from "./FormControlHint.types";
import { FormControlHintRoot } from "./FormControlHint.styles";
import { cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const FormControlHint = (props: FormControlHintProps): JSX.Element => {
    const { hint, className, style, light = true } = useMergeDefaultProps("FormControlHint", props);

    return (
        <FormControlHintRoot
            className={cx("FormControlHint", className)}
            style={style}
            light={light}
        >
            {hint}
        </FormControlHintRoot>
    );
};

export default FormControlHint;
