import { IconButtonProps } from "./IconButton.types";
import { useContext, useState } from "react";
import { IconButtonRoot } from "./IconButton.styles";
import { Icon } from "../../display/Icon";
import useIconButtonStyles from "./hook/useIconButtonStyles";
import { ActivityIndicator, TouchableWithoutFeedback } from "react-native";
import { FormContext, useMergeDefaultProps } from "@peersyst/react-components-core";

const IconButton = (props: IconButtonProps): JSX.Element => {
    const {
        onPress: onPressProp,
        type,
        action,
        loading = false,
        disabled: disabledProp = false,
        style = {},
        children,
    } = useMergeDefaultProps("IconButton", props);

    const [pressed, setPressed] = useState(false);

    const { textStyle, rootStyle } = useIconButtonStyles(style, pressed, disabledProp);

    const { handleSubmit: submit, valid } = useContext(FormContext);

    const disabled = disabledProp || loading || (type === "submit" && valid === false);

    const handleSubmit = () => {
        submit(action);
    };

    const onPress = type === "submit" ? handleSubmit : onPressProp;

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
