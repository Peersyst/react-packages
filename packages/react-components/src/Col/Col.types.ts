import React from "react";
import { Property } from "csstype";

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Flex of the column
     */
    flex?: Property.Flex;
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
    gap?: number;
}
