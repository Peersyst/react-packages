import { ButtonRoot, ButtonLoader, ButtonContent } from "./Button.styles";
import { ButtonProps } from "./Button.types";
import { TouchableWithoutFeedback, ActivityIndicator, Text } from "react-native";
import { useContext, useState } from "react";
import { ElementStyler } from "../../util/ElementStyler";
import useButtonStyles from "./hooks/useButtonStyles";
import { FormContext } from "../Form";

const Button = ({
    onPress: onPressProp,
    children,
    loading = false,
    loadingElement,
    size = "md",
    rightIcon,
    leftIcon,
    fullWidth = false,
    disabled: disabledProp = false,
    variant = "contained",
    style = {},
    ...rest
}: ButtonProps): JSX.Element => {
    const [pressed, setPressed] = useState(false);

    const { handleSubmit, valid } = useContext(FormContext);
    const onPress = onPressProp || handleSubmit;
    const disabled = disabledProp || !valid;

    const { textStyle, rootStyle } = useButtonStyles(style, variant, size, disabled, pressed);
    const pressable = !disabled && !loading;
    return (
        <TouchableWithoutFeedback
            onPress={(e) => pressable && onPress?.(e)}
            accessibilityRole="button"
            onPressIn={() => pressable && setPressed(true)}
            onPressOut={() => pressable && setPressed(false)}
            {...rest}
        >
            <ButtonRoot style={{ ...rootStyle, justifyContent: "center" }} fullWidth={fullWidth}>
                {loading && (
                    <ButtonLoader>
                        {loadingElement ? (
                            <ElementStyler style={textStyle}>{loadingElement}</ElementStyler>
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
                    style={{ justifyContent: rootStyle["justifyContent"] || "center" }}
                >
                    {leftIcon && <ElementStyler style={textStyle}>{leftIcon}</ElementStyler>}
                    <Text style={textStyle}>{children}</Text>
                    {rightIcon && <ElementStyler style={textStyle}>{rightIcon}</ElementStyler>}
                </ButtonContent>
            </ButtonRoot>
        </TouchableWithoutFeedback>
    );
};

export default Button;
