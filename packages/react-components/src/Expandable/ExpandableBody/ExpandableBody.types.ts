import { CSSProperties, ReactElement, ReactNode } from "react";
import { ExpandableHeader } from "./ExpandableHeader";
import { ExpandableContent } from "./ExpandableContent";
import { ExpandableFooter } from "./ExpandableFooter";

export type ExpandableBodyChildren =
    | [
          ReactElement<typeof ExpandableHeader>,
          ReactElement<typeof ExpandableContent>,
          ReactElement<typeof ExpandableFooter>,
      ]
    | [ReactElement<typeof ExpandableHeader>, ReactElement<typeof ExpandableContent>]
    | [ReactElement<typeof ExpandableContent>, ReactElement<typeof ExpandableFooter>]
    | ReactElement<typeof ExpandableContent>;

export interface ExpandableBodyProps {
    /**
     * Body className
     */
    className?: string;
    /**
     * Body style
     */
    style?: CSSProperties;
    /**
     * Body elements
     */
    children: ExpandableBodyChildren;
}

export interface ExpandableHeaderProps {
    /**
     * ClassName
     */
    className?: string;
    /**
     * Style
     */
    style?: CSSProperties;
    /**
     * Content
     */
    children?: ReactNode;
}

export interface ExpandableFooterProps {
    /**
     * ClassName
     */
    className?: string;
    /**
     * Style
     */
    style?: CSSProperties;
    /**
     * Content
     */
    children?: ReactNode;
}

export interface ExpandableContentProps {
    /**
     * ClassName
     */
    className?: string;
    /**
     * Style
     */
    style?: CSSProperties;
    /**
     * Content
     */
    children?: ReactNode;
}
