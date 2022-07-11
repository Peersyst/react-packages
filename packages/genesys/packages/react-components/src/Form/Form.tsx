import { FormProps } from "./Form.types";
import { cx } from "@peersyst/react-utils";
import {
    Form as CoreForm,
    FormConsumer,
    useMergeDefaultProps,
} from "@peersyst/react-components-core";

const Form = (props: FormProps): JSX.Element => {
    const { style, className, children, ...coreProps } = useMergeDefaultProps("Form", props);

    return (
        <CoreForm {...coreProps}>
            <FormConsumer>
                {({ valid, handleSubmit }) => (
                    <form
                        style={style}
                        className={cx("Form", className)}
                        onSubmit={valid ? handleSubmit : undefined}
                    >
                        {children}
                    </form>
                )}
            </FormConsumer>
        </CoreForm>
    );
};

export default Form;
