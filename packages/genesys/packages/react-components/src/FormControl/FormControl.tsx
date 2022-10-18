import { FormControlProps } from "./FormControl.types";
import {
    FormControl as CoreFormControl,
    FormControlContext,
    useMergeDefaultProps,
} from "@peersyst/react-components-core";
import { FormControlError } from "../FormControlError";
import { FormControlHint } from "../FormControlHint";
import { FormControlLabel } from "../FormControlLabel";
import { cx } from "@peersyst/react-utils";
import { FormControlRoot } from "./FormControl.styles";

function FormControl<T = any>(props: FormControlProps<T>): JSX.Element {
    const {
        className,
        style,
        label,
        hint,
        Label = FormControlLabel,
        children,
        ...coreProps
    } = useMergeDefaultProps("FormControl", props);

    const [LabelComponent, LabelProps] = Array.isArray(Label) ? Label : [Label, {}];

    return (
        <CoreFormControl<T> {...coreProps}>
            {(value, setValue, setFocused, error) => {
                return (
                    <FormControlContext.Consumer>
                        {(context) => {
                            const { required, readonly, invalid, disabled, focused, valid } =
                                context;
                            const content = children(value, setValue, context);

                            const handleFocus = () => {
                                if (!readonly && !disabled) setFocused(true);
                            };

                            const handleBlur = () => {
                                if (focused) setFocused(false);
                            };

                            return (
                                <FormControlRoot
                                    gap={5}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    className={cx(
                                        "FormControl",
                                        required && "Required",
                                        readonly && "Readonly",
                                        focused && "Focused",
                                        invalid && "Invalid",
                                        valid && "Valid",
                                        disabled && "Disabled",
                                        className,
                                    )}
                                    style={style}
                                >
                                    {label ? (
                                        <LabelComponent label={label} {...LabelProps}>
                                            {content}
                                        </LabelComponent>
                                    ) : (
                                        content
                                    )}
                                    {hint && <FormControlHint hint={hint} />}
                                    {error && <FormControlError error={error} />}
                                </FormControlRoot>
                            );
                        }}
                    </FormControlContext.Consumer>
                );
            }}
        </CoreFormControl>
    );
}

export default FormControl;
