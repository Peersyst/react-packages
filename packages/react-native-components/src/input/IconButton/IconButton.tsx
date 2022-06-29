import { IconButtonProps } from "./IconButton.types";
import { useContext, useMemo, useState } from "react";
import { IconButtonRoot } from "./IconButton.styles";
import { Icon } from "../../display/Icon";
import useIconButtonStyles from "./hook/useIconButtonStyles";
import { ActivityIndicator, TouchableWithoutFeedback } from "react-native";
import { FormContext } from "@peersyst/react-components-core";

const IconButton = ({
    onPress: onPressProp,
    type,
    loading = false,
    disabled: disabledProp = false,
    style = {},
    children,
}: IconButtonProps): JSX.Element => {
    const [pressed, setPressed] = useState(false);

    const { textStyle, rootStyle } = useIconButtonStyles(style, pressed, disabledProp);

    const { handleSubmit, valid } = useContext(FormContext);
    const onPress = useMemo(() => {
        if (type === "submit") return handleSubmit;
        else return onPressProp;
    }, [type, handleSubmit]);

    const disabled = disabledProp || loading || (type === "submit" && valid === false);

    return (
        <TouchableWithoutFeedback
            onPress={(e) => !disabled && onPress?.(e)}
            accessibilityRole="button"
            onPressIn={() => !disabled && setPressed(true)}
            onPressOut={() => !disabled && setPressed(false)}
        >
            <IconButtonRoot style={rootStyle}>
                {loading ? (
                    <ActivityIndicator color={textStyle.color} />
                ) : (
                    <Icon style={textStyle}>{children}</Icon>
                )}
            </IconButtonRoot>
        </TouchableWithoutFeedback>
    );
};

export default IconButton;
