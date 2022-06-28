import { FormControlProps } from "./FormControl.types";
import {
    FormControl as CoreFormControl,
    FormControlContext,
} from "@peersyst/react-components-core";
import { FormControlError } from "../FormControlError";
import { FormControlHint } from "../FormControlHint";
import { FormControlLabel } from "../FormControlLabel";
import { cx } from "@peersyst/react-utils";
import { FormControlRoot } from "./FormControl.styles";

function FormControl<T = any>({
    className,
    style,
    label,
    hint,
    Label = FormControlLabel,
    children,
    ...coreProps
}: FormControlProps<T>): JSX.Element {
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
                            return (
                                <FormControlRoot
                                    gap={5}
                                    onFocus={() => setFocused(true)}
                                    onBlur={() => setFocused(false)}
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
