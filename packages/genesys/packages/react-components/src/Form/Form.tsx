import { FormProps } from "./Form.types";
import { cx } from "@peersyst/react-utils";
import { Form as CoreForm, useMergeDefaultProps } from "@peersyst/react-components-core";

const Form = (props: FormProps): JSX.Element => {
    const { style, className, children, ...coreProps } = useMergeDefaultProps("Form", props);

    return (
        <CoreForm {...coreProps}>
            <form style={style} className={cx("Form", className)}>
                {children}
            </form>
        </CoreForm>
    );
};

export default Form;
