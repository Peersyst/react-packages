import { SX } from "./types";
import { useTheme } from "./theme";

export default function useStyled<TProps, TStyle>(
    sx: SX<TProps, TStyle> | undefined,
    ownerProps: TProps,
): () => TStyle | undefined {
    const theme = useTheme();
    const props = { ...ownerProps, theme };

    return () => sx?.(props);
}
