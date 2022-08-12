// From @mui/mui-base

import { ElementType } from "react";

/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */
function isHostComponent(element: ElementType) {
    return typeof element === "string";
}

export default isHostComponent;
