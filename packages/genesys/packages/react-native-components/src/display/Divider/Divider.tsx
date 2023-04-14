import { DividerRoot, DividerWithChildren } from "./Divider.styles";
import { DividerProps } from "./Divider.types";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { useDividerStyles } from "./hooks";

export default function Divider(rawProps: DividerProps): JSX.Element {
    const props = useMergeDefaultProps("Divider", rawProps);
    const { size = 1, width: widthProp = "full-width", children, style: _style } = props;

    const style = useDividerStyles(props);
    const {
        width: _width,
        height: _height,
        minWidth,
        minHeight,
        maxHeight,
        maxWidth,
        ...restStyle
    } = style || {};
    const divStyle = {
        currentColor: (style as any).currentColor,
        minWidth,
        minHeight,
        maxHeight,
        maxWidth,
    };

    return children ? (
        <DividerWithChildren width={widthProp} style={restStyle}>
            <DividerRoot height={size} width="full-width" style={divStyle} />
            {children}
            <DividerRoot height={size} width="full-width" style={divStyle} />
        </DividerWithChildren>
    ) : (
        <DividerRoot height={size} width={widthProp} style={style} />
    );
}
