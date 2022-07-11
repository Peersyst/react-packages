import { useState } from "react";
import { Pressable } from "react-native";
import { TouchableText } from "./PressableText.styles";
import { PressableTextProps } from "./PressableText.types";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const PressableText = (props: PressableTextProps): JSX.Element => {
    const {
        children,
        onPress,
        disabled = false,
        ...res
    } = useMergeDefaultProps("PressableText", props);

    const [pressed, setPressed] = useState<boolean>(false);
    return (
        <Pressable
            onPress={disabled ? undefined : onPress}
            onPressIn={() => !disabled && setPressed(true)}
            onPressOut={() => setPressed(false)}
            accessibilityRole="button"
        >
            <TouchableText {...res} pressed={pressed} disabled={disabled}>
                {children}
            </TouchableText>
        </Pressable>
    );
};

export default PressableText;
