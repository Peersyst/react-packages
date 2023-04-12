import { TypographyProps, TypographyStyle } from "../Typography.types";
import { useGlobalStyles } from "../../../config";
import {
    useMergeStylesheets,
    useResolveStylesheet,
    useStylesheet,
} from "@peersyst/react-native-styled";
import { useColor } from "@peersyst/react-components-core";

export default function useTypographyStyles(props: TypographyProps): TypographyStyle {
    const { style, color: colorProp = "text" } = props;

    const color = useColor(colorProp);

    const defaultStyle = useGlobalStyles("Typography");
    const stylesheet = useStylesheet<TypographyProps>("Typography");
    const mergedStylesheets = useMergeStylesheets<TypographyProps>(
        { currentColor: color, color },
        stylesheet,
        defaultStyle,
        style,
    );

    return useResolveStylesheet(props, mergedStylesheets);
}
