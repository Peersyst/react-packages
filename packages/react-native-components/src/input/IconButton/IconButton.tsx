import { IconButtonProps } from "./IconButton.types";
import { useState } from "react";
import { IconButtonRoot } from "./IconButton.styles";
import { ElementStyler } from "../../util/ElementStyler";
import useIconButtonStyles from "./hook/useIconButtonStyles";
import { TouchableWithoutFeedback } from "react-native";

const IconButton = ({
    onPress,
    disabled = false,
    style = {},
    children,
}: IconButtonProps): JSX.Element => {
    const [pressed, setPressed] = useState(false);

    const { textStyle, rootStyle } = useIconButtonStyles(style, pressed, disabled);

    return (
        <TouchableWithoutFeedback
            onPress={(e) => !disabled && onPress?.(e)}
            accessibilityRole="button"
            onPressIn={() => !disabled && setPressed(true)}
            onPressOut={() => !disabled && setPressed(false)}
        >
            <IconButtonRoot style={rootStyle}>
                <ElementStyler style={textStyle}>{children}</ElementStyler>
            </IconButtonRoot>
        </TouchableWithoutFeedback>
    );
};

export default IconButton;
