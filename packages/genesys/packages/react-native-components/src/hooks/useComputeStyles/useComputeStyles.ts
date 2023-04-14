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
    const componentName = getComponentStylesheetName(Component);

    // TODO: Remove in v4
    const deprecatedGlobalStyle = useGlobalStyles(componentName as any);

    const stylesheet: P["style"] = useStylesheet<P>(componentName);

    // TODO: Add in v4 as it is not backward compatible with deprecated global styles
    // If component stylesheet is included in styles, do not merge it again
    // if (props.style?._metadata?.isStylesheet && props.style._metadata.component === componentName)
    //     stylesheet = undefined;

    const mergedStylesheets = useMergeStylesheets<P>(
        init,
        stylesheet,
        deprecatedGlobalStyle,
        props.style,
    ) as Stylesheet<P["style"]>;

    return useResolveStylesheet(props, mergedStylesheets, resolveOptions);
}
