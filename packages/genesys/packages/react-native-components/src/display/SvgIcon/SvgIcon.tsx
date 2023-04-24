import { SvgIconProps } from "./SvgIcon.types";
import Svg from "react-native-svg";
import { ColorValue } from "react-native";
import { useTheme } from "@peersyst/react-native-styled";
import { useSvgIconStyles } from "./hooks";

const SvgIcon = (props: SvgIconProps): JSX.Element => {
    const { color: colorProp, size: sizeProp = "24px", style: _style, ...rest } = props;

    const style = useSvgIconStyles(props);

    const {
        palette: { text: textColor },
    } = useTheme();

    let color: ColorValue = textColor,
        size = sizeProp;

    if (style) {
        if (style.color) color = style.color;
        if (style.fontSize) size = style.fontSize;
    }

    return (
        <Svg
            viewBox="0 0 24 24"
            fill={color || colorProp}
            width={size}
            height={size}
            accessibilityRole="image"
            {...rest}
        />
    );
};

export default SvgIcon;
