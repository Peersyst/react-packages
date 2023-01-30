import { ThemeColor, useTheme } from "@peersyst/react-components-core";
import { getAttribute } from "@peersyst/react-utils";

export default function <T = string, C extends ThemeColor = ThemeColor>(
    color: C | undefined,
): T | undefined {
    const { palette } = useTheme();
    return color ? (getAttribute(palette, color) as T) : undefined;
}
