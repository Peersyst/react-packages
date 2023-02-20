import { ButtonRoot } from "./Button.styles";
import { ButtonProps } from "./Button.types";
import { TouchableWithoutFeedback, Text } from "react-native";
import { isValidElement, ReactElement, useContext, useState } from "react";
import { Icon } from "../../display/Icon";
import useButtonStyles from "./hooks/useButtonStyles";
import { FormContext, useColor, useMergeDefaultProps } from "@peersyst/react-components-core";
import { ElementStyler } from "../../util/ElementStyler";
import { Suspense } from "../../feedback/Suspense";
import { Row } from "../../layout/Row";

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

    const {
        textStyle,
        rootStyle: { gradient, backgroundColor, ...restRootStyle },
    } = useButtonStyles(style, variant, size, disabled, pressed, color);
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
                <Suspense fallback={loadingElement} isLoading={loading}>
                    <Row gap={16} alignItems="center">
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
                </Suspense>
            </ButtonRoot>
        </TouchableWithoutFeedback>
    );
};

export default Button;
