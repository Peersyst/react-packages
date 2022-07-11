import * as React from "react";
import { Property } from "csstype";

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Flex of the column
     */
    flex?: Property.Flex;
    /**
     * Reverse direction
     */
    reverse?: boolean;
    /**
     * Items alignment
     */
    alignItems?: Property.AlignItems;
    /**
     * Content justification
     */
    justifyContent?: Property.JustifyContent;
    /**
     * Gap between elements
     */
    gap?: number | string;
}
