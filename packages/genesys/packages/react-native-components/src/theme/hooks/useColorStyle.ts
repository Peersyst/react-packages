import { ThemeColor, useColor } from "@peersyst/react-components-core";

export default function (color: ThemeColor | undefined): { color: string } | {} {
    const colorValue = useColor(color);
    return colorValue ? { color: colorValue } : {};
}
