import { TypographyProps, TypographyStyle } from "../Typography.types";
import { useColor } from "@peersyst/react-components-core";
import { useComputeStyles } from "../../../hooks";
import { makeStyleComputation } from "../../../utils";

export default function useTypographyStyles(props: TypographyProps): TypographyStyle {
    const { color: colorProp = "text", light } = props;

    const color = useColor(colorProp);

    const compute = makeStyleComputation<TypographyProps>(
        function (stylesheet) {
            const { light: lightStyles = {}, ...styles } = stylesheet;

            return {
                ...styles,
                ...(light && { ...lightStyles }),
            };
        },
        [light],
    );

    return useComputeStyles("Typography", props, { currentColor: color, color }, { compute });
}
