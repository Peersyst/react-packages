import { DividerRoot, DividerWithChildren } from "./Divider.styles";
import { DividerProps } from "./Divider.types";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { useGlobalStyles } from "../../config";

export default function Divider(props: DividerProps): JSX.Element {
    const {
        size = 1,
        width: widthProp = "full-width",
        style: styleProp,
        color,
        children,
    } = useMergeDefaultProps("Divider", props);
    const defaultStyle = useGlobalStyles("Divider");
    const style = { ...defaultStyle, ...styleProp };
    const {
        backgroundColor,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        width,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        height,
        minWidth,
        minHeight,
        maxHeight,
        maxWidth,
        ...restStyle
    } = style || {};
    const divStyle = { backgroundColor, minWidth, minHeight, maxHeight, maxWidth };

    return children ? (
        <DividerWithChildren width={widthProp} style={restStyle}>
            <DividerRoot height={size} color={color} width="full-width" style={divStyle} />
            {children}
            <DividerRoot height={size} color={color} width="full-width" style={divStyle} />
        </DividerWithChildren>
    ) : (
        <DividerRoot height={size} color={color} width={widthProp} style={style} />
    );
}
