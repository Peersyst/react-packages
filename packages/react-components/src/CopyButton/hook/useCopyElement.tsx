import { useTheme } from "../../theme";

export default function useCopyElement(
    loading: boolean,
    copied: boolean,
    hovered: boolean,
): JSX.Element {
    const {
        icons: { copy: Copy, check: Check },
        loader: Loader,
    } = useTheme();

    if (loading) return <Loader />;
    else if (hovered || !copied) return <Copy />;
    else return <Check />;
}
