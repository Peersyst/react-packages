import {
    Stylesheet,
    getComponentStylesheetName,
    useStylesheet,
    useMergeStylesheets,
    useResolveStylesheet,
    ResolveStylesheetOptions,
} from "@peersyst/react-native-styled";
import { AnyObject } from "@peersyst/react-types";
import { JSXElementConstructor } from "react";
import { useGlobalStyles } from "../../config";

export default function useComputeStyles<P extends { style?: AnyObject }>(
    Component: JSXElementConstructor<P> | string,
    props: P,
    init?: Stylesheet<P["style"]>,
    resolveOptions?: ResolveStylesheetOptions<P>,
): NonNullable<P["style"]> {
    // TODO: Remove in v4
    const deprecatedGlobalStyle = useGlobalStyles(getComponentStylesheetName(Component) as any);
    const stylesheet = useStylesheet<P>(getComponentStylesheetName(Component));
    const mergedStylesheets = useMergeStylesheets<P>(
        init,
        stylesheet,
        deprecatedGlobalStyle,
        props.style,
    ) as Stylesheet<P["style"]>;

    return useResolveStylesheet(props, mergedStylesheets, resolveOptions);
}
