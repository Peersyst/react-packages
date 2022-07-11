import { Children } from "react";
import { SwitchChildren, SwitchRoot, SwitchThumb, SwitchTrack } from "./Switch.styles";
import { SwitchProps, SwitchStyleProps } from "./Switch.types";
import { cx } from "@peersyst/react-utils";
import { FormControl } from "../FormControl";
import { Label } from "../Label";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { Row } from "../Row";

export default function Switch(props: SwitchProps): JSX.Element {
    const {
        defaultValue = false,
        disabled = false,
        children,
        LabelProps = {},
        hideError = true,
        Label: LabelProp = Label,
        ...rest
    } = useMergeDefaultProps("Switch", props);

    return (
        <FormControl<boolean>
            Label={[LabelProp, { placement: "left", ...LabelProps }]}
            defaultValue={defaultValue}
            disabled={disabled}
            hideError={hideError}
            {...rest}
        >
            {(value, setValue) => {
                const styleProps: SwitchStyleProps = {
                    checked: value,
                    disabled,
                };

                return (
                    <SwitchRoot
                        className={cx("Switch", value && "Checked", disabled && "Disabled")}
                        onClick={() => setValue(!value)}
                        {...styleProps}
                    >
                        <SwitchChildren>
                            {Children.map(children, (child, index) => (
                                <Row
                                    key={index.toString()}
                                    flex={1}
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    {child}
                                </Row>
                            ))}
                        </SwitchChildren>
                        <SwitchTrack
                            {...styleProps}
                            className={cx(
                                "SwitchTrack",
                                value && "Checked",
                                disabled && "Disabled",
                            )}
                        >
                            <SwitchThumb
                                {...styleProps}
                                className={cx(
                                    "SwitchThumb",
                                    value && "Checked",
                                    disabled && "Disabled",
                                )}
                            />
                        </SwitchTrack>
                    </SwitchRoot>
                );
            }}
        </FormControl>
    );
}
