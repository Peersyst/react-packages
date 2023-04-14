import { useState } from "react";
import { Pressable } from "react-native";
import { TouchableText } from "./PressableText.styles";
import { PressableTextProps } from "./PressableText.types";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { usePressableTextStyles } from "./hooks";

const PressableText = (rawProps: PressableTextProps): JSX.Element => {
    const props = useMergeDefaultProps("PressableText", rawProps);

    const { children, onPress, disabled = false, style: _style, ...res } = props;

    const style = usePressableTextStyles(props);

    const [pressed, setPressed] = useState<boolean>(false);

    return (
        <Pressable
            onPress={disabled ? undefined : onPress}
            onPressIn={() => !disabled && setPressed(true)}
            onPressOut={() => setPressed(false)}
            accessibilityRole="button"
            style={style}
        >
            <TouchableText {...res} pressed={pressed} disabled={disabled}>
                {children}
            </TouchableText>
        </Pressable>
    );
};

export default PressableText;
