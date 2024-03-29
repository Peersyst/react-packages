import { ButtonRoot } from "./Button.styles";
import { TouchableWithoutFeedback, Text, GestureResponderEvent } from "react-native";
import { isValidElement, ReactElement, useState } from "react";
import { Icon } from "../../display/Icon";
import useButtonStyles from "./hooks/useButtonStyles";
import { ElementStyler } from "../../util/ElementStyler";
import { filter } from "@peersyst/react-utils";
import { ButtonProps } from "./Button.types";
import useButton from "./hooks/useButton";
import { ContainedSuspense } from "../../feedback/ContainedSuspense";
import { Row } from "../../layout/Row";

const Button = (rawProps: ButtonProps): JSX.Element => {
    const { props, computed } = useButton(rawProps);

    const {
        onPress,
        children,
        loading = false,
        loadingElement,
        rightIcon,
        leftIcon,
        fullWidth = false,
        ...restProps
    } = props;

    const { handleSubmit, enabled } = computed;

    const touchableProps = filter(restProps, "type", "disabled", "action");

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
        rootStyle: { gap = 16, ...rootStyle },
    } = useButtonStyles(props, computed, pressed);

    return (
        <TouchableWithoutFeedback
            onPress={enabled ? handlePress : undefined}
            accessibilityRole="button"
            onPressIn={enabled ? normalizedPressEventHandler(true) : undefined}
            onPressOut={enabled ? normalizedPressEventHandler(false) : undefined}
            {...touchableProps}
        >
            <ButtonRoot style={rootStyle} fullWidth={fullWidth}>
                <ContainedSuspense
                    isLoading={loading}
                    activityIndicatorColor={textStyle.color as string}
                    activityIndicatorSize={
                        textStyle.fontSize && textStyle.fontSize > 20 ? "large" : "small"
                    }
                    fallback={loadingElement}
                >
                    <Row
                        gap={gap}
                        alignItems="center"
                        style={{ justifyContent: rootStyle["justifyContent"] || "center" }}
                    >
                        {leftIcon && <Icon style={textStyle}>{leftIcon}</Icon>}
                        {typeof children === "string" ? (
                            <Text style={textStyle}>{children}</Text>
                        ) : isValidElement(children) ? (
                            <ElementStyler style={textStyle}>
                                {children as ReactElement}
                            </ElementStyler>
                        ) : (
                            children
                        )}
                        {rightIcon && <Icon style={textStyle}>{rightIcon}</Icon>}
                    </Row>
                </ContainedSuspense>
            </ButtonRoot>
        </TouchableWithoutFeedback>
    );
};

export default Button;
