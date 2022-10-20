import {
    CSSProperties,
    DragEventHandler,
    MouseEventHandler,
    PointerEventHandler,
    ReactEventHandler,
    ReactNode,
    TouchEventHandler,
} from "react";
import {
    ThemeColor,
    ThemeFonts,
    TypographyVariants,
    TypographyVariantsOverrides,
} from "@peersyst/react-components-core";
import { Property } from "csstype";
import { CSSObject } from "styled-components";
import { OverridableStringUnion } from "@peersyst/react-types";

export interface TypographyProps extends TypographyDomProps {
    /**
     * Typography variant
     */
    variant: OverridableStringUnion<TypographyVariants | "inherit", TypographyVariantsOverrides>;
    /**
     * Typography font
     */
    font?: keyof ThemeFonts;
    /**
     * Text transform css property
     */
    textTransform?: Property.TextTransform;
    /**
     * Font style css property
     */
    fontStyle?: Property.FontStyle;
    /**
     * Text align css property
     */
    textAlign?: Property.TextAlign;
    /**
     * Font weight css property
     */
    fontWeight?: Property.FontWeight;
    /**
     * Text doesn't wrap and shows ellipsis if overflowed
     */
    singleLine?: boolean;
    /**
     * Text is light
     */
    light?: boolean;
    /**
     * Text color
     */
    color?: ThemeColor;
    /**
     * Typography className
     */
    className?: string;
    /**
     * Typography style
     */
    style?: CSSProperties;
    /**
     * Text content
     */
    children?: ReactNode;
}

export interface TypographyDomProps {
    // MouseEvents
    onAuxClick?: MouseEventHandler<HTMLElement> | undefined;
    onAuxClickCapture?: MouseEventHandler<HTMLElement> | undefined;
    onClick?: MouseEventHandler<HTMLElement> | undefined;
    onClickCapture?: MouseEventHandler<HTMLElement> | undefined;
    onContextMenu?: MouseEventHandler<HTMLElement> | undefined;
    onContextMenuCapture?: MouseEventHandler<HTMLElement> | undefined;
    onDoubleClick?: MouseEventHandler<HTMLElement> | undefined;
    onDoubleClickCapture?: MouseEventHandler<HTMLElement> | undefined;
    onDrag?: DragEventHandler<HTMLElement> | undefined;
    onDragCapture?: DragEventHandler<HTMLElement> | undefined;
    onDragEnd?: DragEventHandler<HTMLElement> | undefined;
    onDragEndCapture?: DragEventHandler<HTMLElement> | undefined;
    onDragEnter?: DragEventHandler<HTMLElement> | undefined;
    onDragEnterCapture?: DragEventHandler<HTMLElement> | undefined;
    onDragExit?: DragEventHandler<HTMLElement> | undefined;
    onDragExitCapture?: DragEventHandler<HTMLElement> | undefined;
    onDragLeave?: DragEventHandler<HTMLElement> | undefined;
    onDragLeaveCapture?: DragEventHandler<HTMLElement> | undefined;
    onDragOver?: DragEventHandler<HTMLElement> | undefined;
    onDragOverCapture?: DragEventHandler<HTMLElement> | undefined;
    onDragStart?: DragEventHandler<HTMLElement> | undefined;
    onDragStartCapture?: DragEventHandler<HTMLElement> | undefined;
    onDrop?: DragEventHandler<HTMLElement> | undefined;
    onDropCapture?: DragEventHandler<HTMLElement> | undefined;
    onMouseDown?: MouseEventHandler<HTMLElement> | undefined;
    onMouseDownCapture?: MouseEventHandler<HTMLElement> | undefined;
    onMouseEnter?: MouseEventHandler<HTMLElement> | undefined;
    onMouseLeave?: MouseEventHandler<HTMLElement> | undefined;
    onMouseMove?: MouseEventHandler<HTMLElement> | undefined;
    onMouseMoveCapture?: MouseEventHandler<HTMLElement> | undefined;
    onMouseOut?: MouseEventHandler<HTMLElement> | undefined;
    onMouseOutCapture?: MouseEventHandler<HTMLElement> | undefined;
    onMouseOver?: MouseEventHandler<HTMLElement> | undefined;
    onMouseOverCapture?: MouseEventHandler<HTMLElement> | undefined;
    onMouseUp?: MouseEventHandler<HTMLElement> | undefined;
    onMouseUpCapture?: MouseEventHandler<HTMLElement> | undefined;

    // Selection Events
    onSelect?: ReactEventHandler<HTMLElement> | undefined;
    onSelectCapture?: ReactEventHandler<HTMLElement> | undefined;

    // Touch Events
    onTouchCancel?: TouchEventHandler<HTMLElement> | undefined;
    onTouchCancelCapture?: TouchEventHandler<HTMLElement> | undefined;
    onTouchEnd?: TouchEventHandler<HTMLElement> | undefined;
    onTouchEndCapture?: TouchEventHandler<HTMLElement> | undefined;
    onTouchMove?: TouchEventHandler<HTMLElement> | undefined;
    onTouchMoveCapture?: TouchEventHandler<HTMLElement> | undefined;
    onTouchStart?: TouchEventHandler<HTMLElement> | undefined;
    onTouchStartCapture?: TouchEventHandler<HTMLElement> | undefined;

    // Pointer Events
    onPointerDown?: PointerEventHandler<HTMLElement> | undefined;
    onPointerDownCapture?: PointerEventHandler<HTMLElement> | undefined;
    onPointerMove?: PointerEventHandler<HTMLElement> | undefined;
    onPointerMoveCapture?: PointerEventHandler<HTMLElement> | undefined;
    onPointerUp?: PointerEventHandler<HTMLElement> | undefined;
    onPointerUpCapture?: PointerEventHandler<HTMLElement> | undefined;
    onPointerCancel?: PointerEventHandler<HTMLElement> | undefined;
    onPointerCancelCapture?: PointerEventHandler<HTMLElement> | undefined;
    onPointerEnter?: PointerEventHandler<HTMLElement> | undefined;
    onPointerEnterCapture?: PointerEventHandler<HTMLElement> | undefined;
    onPointerLeave?: PointerEventHandler<HTMLElement> | undefined;
    onPointerLeaveCapture?: PointerEventHandler<HTMLElement> | undefined;
    onPointerOver?: PointerEventHandler<HTMLElement> | undefined;
    onPointerOverCapture?: PointerEventHandler<HTMLElement> | undefined;
    onPointerOut?: PointerEventHandler<HTMLElement> | undefined;
    onPointerOutCapture?: PointerEventHandler<HTMLElement> | undefined;
    onGotPointerCapture?: PointerEventHandler<HTMLElement> | undefined;
    onGotPointerCaptureCapture?: PointerEventHandler<HTMLElement> | undefined;
    onLostPointerCapture?: PointerEventHandler<HTMLElement> | undefined;
    onLostPointerCaptureCapture?: PointerEventHandler<HTMLElement> | undefined;
}

export interface TypographyRootProps {
    font?: keyof ThemeFonts;
    textTransform: Property.TextTransform;
    fontStyle: Property.FontStyle;
    textAlign: Property.TextAlign;
    fontWeight: Property.FontWeight;
    singleLine: boolean;
    light: boolean;
    variantStyles: CSSObject;
    color?: string;
}
