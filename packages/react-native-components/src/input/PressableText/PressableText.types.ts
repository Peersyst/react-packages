import { PressableProps } from "react-native";
import { TypographyProps } from "../../display/Typography";

export type PressableTextProps = TypographyProps &
    Pick<PressableProps, "onPress"> & {
        disabled?: boolean;
    };

export interface TouchableTextProps {
    pressed: boolean;
    disabled: boolean;
}
