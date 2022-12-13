import { ActivityIndicator, ActivityIndicatorProps, ColorValue } from "react-native";
import { useMergeDefaultProps } from "../../config";
import { Theme, useTheme } from "../../theme";

export interface SpinnerProps extends Omit<ActivityIndicatorProps, "color" | "testID"> {
    color?: ((theme: Theme["palette"]) => string) | ColorValue;
}

const Spinner = (props: SpinnerProps): JSX.Element => {
    const { color: colorCb, style, ...rest } = useMergeDefaultProps("Spinner", props);

    const { palette } = useTheme();
    const color = (typeof colorCb === "function" ? colorCb?.(palette) : colorCb) || palette.text;

    return <ActivityIndicator testID="ActivityIndicator" style={style} color={color} {...rest} />;
};

export default Spinner;
