import { Children } from "react";
import { useFormNotification } from "../Form";
import { SwitchChildren, SwitchRoot, SwitchThumb, SwitchTrack } from "./Switch.styles";
import { Row } from "..";
import { useControlled } from "@peersyst/react-hooks";
import { SwitchProps, SwitchStyleProps } from "./Switch.types";
import { cx, fsx } from "@peersyst/react-utils";

export default function Switch({
    name,
    defaultValue = false,
    value: valueProp,
    onChange,
    className,
    style,
    required = false,
    disabled = false,
    children,
    trackClassName,
    trackStyle,
    thumbClassName,
    thumbStyle,
}: SwitchProps): JSX.Element {
    const [value, setValue] = useControlled(defaultValue, valueProp, onChange);
    useFormNotification(name, value, !required || (required && value));

    const styleProps: SwitchStyleProps = {
        checked: value,
        disabled,
    };

    return (
        <SwitchRoot
            className={cx(className, "Switch", value && "Checked", disabled && "Disabled")}
            style={fsx(style, styleProps)}
            onClick={() => !disabled && setValue(!value)}
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
                    trackClassName,
                    "SwitchTrack",
                    value && "Checked",
                    disabled && "Disabled",
                )}
                style={fsx(trackStyle, styleProps)}
            >
                <SwitchThumb
                    {...styleProps}
                    className={cx(
                        thumbClassName,
                        "SwitchThumb",
                        value && "Checked",
                        disabled && "Disabled",
                    )}
                    style={fsx(thumbStyle, styleProps)}
                />
            </SwitchTrack>
        </SwitchRoot>
    );
}
