import { ThemeColor } from "@peersyst/react-components-core";
import { ActivityIndicator, ActivityIndicatorProps } from "react-native";
import { useMergeDefaultProps } from "../../config";
import { useColor } from "../../theme";

export interface SpinnerProps extends Omit<ActivityIndicatorProps, "color" | "testID"> {
    color?: ThemeColor | string;
}

const Spinner = (props: SpinnerProps): JSX.Element => {
    const { color: colorProp, style, ...rest } = useMergeDefaultProps("Spinner", props);

    const color = useColor(colorProp || "text");

    return <ActivityIndicator testID="ActivityIndicator" style={style} color={color} {...rest} />;
};

export default Spinner;
