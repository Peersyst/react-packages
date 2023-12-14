import { ReactNode, isValidElement } from "react";

export function isValidGapChild(child: ReactNode): boolean {
    return (
        !!child &&
        (!isValidElement(child) ||
            !child.props ||
            typeof child.props !== "object" ||
            !("style" in child.props) ||
            !child.props.style ||
            typeof child.props.style !== "object" ||
            ((child.props.style as any).display !== "none" &&
                (child.props.style as any).position !== "absolute"))
    );
}
