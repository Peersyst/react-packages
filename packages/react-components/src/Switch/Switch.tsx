import { Children } from "react";
import { SwitchChildren, SwitchRoot, SwitchThumb, SwitchTrack } from "./Switch.styles";
import { Row } from "..";
import { SwitchProps, SwitchStyleProps } from "./Switch.types";
import { cx } from "@peersyst/react-utils";
import { FormControl } from "../FormControl";
import { Label } from "../Label";

export default function Switch({
    defaultValue = false,
    disabled = false,
    children,
    LabelProps = {},
    hideError = true,
    Label: LabelProp = Label,
    ...rest
}: SwitchProps): JSX.Element {
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
