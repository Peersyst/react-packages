import { TypographyProps, TypographyStyle } from "../Typography.types";
import { useColor } from "@peersyst/react-components-core";
import { useComputeStyles } from "../../../hooks";

export default function useTypographyStyles(props: TypographyProps): TypographyStyle {
    const { color: colorProp = "text" } = props;

    const color = useColor(colorProp);

    return useComputeStyles("Typography", props, { currentColor: color, color });
}
