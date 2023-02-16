import { ButtonRoot, ButtonLoader, ButtonContent } from "./Button.styles";
import { TouchableWithoutFeedback, ActivityIndicator, Text } from "react-native";
import { isValidElement, ReactElement, useState } from "react";
import { Icon } from "../../display/Icon";
import useButtonStyles from "./hooks/useButtonStyles";
import { ButtonProps, useButton } from "@peersyst/react-components-core";
import { ElementStyler } from "../../util/ElementStyler";
import { GestureResponderEvent } from "react-native-modal";
import { filter } from "@peersyst/react-utils";

const Button = (props: ButtonProps): JSX.Element => {
    const {
        onPress,
        children,
        loading = false,
        loadingElement,
        size = "md",
        rightIcon,
        leftIcon,
        fullWidth = false,
        variant = "filled",
        style = {},
        color,
        handleSubmit,
        enabled,
        ...rest
    } = useButton(props);

    const touchableProps = filter(rest, "type", "disabled", "action");

    const [pressed, setPressed] = useState(false);

    const handlePress = (e: GestureResponderEvent): void => {
        if (handleSubmit) handleSubmit();
        else onPress?.(e);
    };

    const normalizedPressEventHandler =
        (pressed: boolean): (() => void) =>
        () =>
            setPressed(pressed);

    const {
        textStyle,
        rootStyle: { gradient, backgroundColor, ...restRootStyle },
    } = useButtonStyles(style, variant, size, !enabled, pressed, color);
    const {
        colors = [backgroundColor, backgroundColor] as [string, string],
        ...restGradientProps
    } = gradient || {};

    return (
        <TouchableWithoutFeedback
            onPress={enabled ? handlePress : undefined}
            accessibilityRole="button"
            onPressIn={enabled ? normalizedPressEventHandler(true) : undefined}
            onPressOut={enabled ? normalizedPressEventHandler(false) : undefined}
            {...touchableProps}
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
