import { FormProps } from "./Form.types";
import { cx } from "@peersyst/react-utils";
import { Form as CoreForm, FormConsumer } from "@peersyst/react-components-core";

const Form = ({ style, className, children, ...coreProps }: FormProps): JSX.Element => (
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

export default Form;
