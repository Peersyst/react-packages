import { LinearGradient } from "expo-linear-gradient";
import { GradientViewProps } from "./GradientView.types";

const GradientView = ({
    style: { backgroundColor, backgroundGradient, ...style } = {},
    ...rest
}: GradientViewProps): JSX.Element => {
    const {
        colors = [backgroundColor, backgroundColor] as [string, string],
        ...restGradientProps
    } = backgroundGradient || {};

    return <LinearGradient style={style} colors={colors} {...restGradientProps} {...rest} />;
};

export default GradientView;
