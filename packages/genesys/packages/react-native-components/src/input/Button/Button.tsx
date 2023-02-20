import { ButtonRoot, ButtonLoader, ButtonContent } from "./Button.styles";
import { ButtonProps } from "./Button.types";
import { TouchableWithoutFeedback, ActivityIndicator, Text } from "react-native";
import { isValidElement, ReactElement, useContext, useState } from "react";
import { Icon } from "../../display/Icon";
import useButtonStyles from "./hooks/useButtonStyles";
import { FormContext, useColor, useMergeDefaultProps } from "@peersyst/react-components-core";
import { ElementStyler } from "../../util/ElementStyler";

const Button = (props: ButtonProps): JSX.Element => {
    const {
        onPress: onPressProp,
        children,
        type = "button",
        action,
        loading = false,
        loadingElement,
        size = "md",
        rightIcon,
        leftIcon,
        fullWidth = false,
        disabled: disabledProp = false,
        variant = "filled",
        style = {},
        color: colorProp,
        ...rest
    } = useMergeDefaultProps("Button", props);

    const color = useColor(colorProp);

    const [pressed, setPressed] = useState(false);

    const { handleSubmit: submit, valid } = useContext(FormContext);
    const disabled = disabledProp || loading || (type === "submit" && valid === false);

    const handleSubmit = () => {
        submit(action);
    };

    const onPress = type === "submit" ? handleSubmit : onPressProp;

    const [{ gradient, backgroundColor, ...restRootStyle }, textStyle] = useButtonStyles(
        style,
        color,
        {
            filled: variant === "filled",
            outlined: variant === "outlined",
            text: variant === "text",
            sm: size === "sm",
            md: size === "md",
            lg: size === "lg",
            pressed: pressed,
            disabled: disabled,
        },
    );
    const {
        colors = [backgroundColor, backgroundColor] as [string, string],
        ...restGradientProps
    } = gradient || {};

    const pressable = !disabled && !loading;

    return (
        <TouchableWithoutFeedback
            onPress={(e) => pressable && onPress?.(e)}
            accessibilityRole="button"
            onPressIn={() => pressable && setPressed(true)}
            onPressOut={() => pressable && setPressed(false)}
            {...rest}
        >
            <ButtonRoot
                colors={colors}
                style={restRootStyle}
                fullWidth={fullWidth}
                {...restGradientProps}
            >
                {loading && (
                    <ButtonLoader>
                        {loadingElement ? (
                            <Icon style={textStyle}>{loadingElement}</Icon>
                        ) : (
                            <ActivityIndicator
                                size={
                                    textStyle.fontSize && textStyle.fontSize > 20
                                        ? "large"
                                        : "small"
                                }
                                color={textStyle.color}
                            />
                        )}
                    </ButtonLoader>
                )}
                <ButtonContent
                    isLoading={loading}
                    style={{ justifyContent: restRootStyle["justifyContent"] || "center" }}
                >
                    {leftIcon && <Icon style={textStyle}>{leftIcon}</Icon>}
                    {typeof children === "string" ? (
                        <Text style={textStyle}>{children}</Text>
                    ) : isValidElement(children) ? (
                        <ElementStyler style={textStyle}>{children as ReactElement}</ElementStyler>
                    ) : (
                        children
                    )}
                    {rightIcon && <Icon style={textStyle}>{rightIcon}</Icon>}
                </ButtonContent>
            </ButtonRoot>
        </TouchableWithoutFeedback>
    );
};

export default Button;
