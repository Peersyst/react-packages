import { JSXElementConstructor, ReactNode } from "react";
import StylesheetContext from "./StylesheetContext";
import { AnyObject } from "@swisstype/essential";
import { getComponentStylesheetName } from "../utils";

export interface StylesheetConsumerProps<P extends { style?: AnyObject } = {}> {
    Component: JSXElementConstructor<P> | string;
    children: (stylesheet: P["style"]) => ReactNode;
}

export default function StylesheetConsumer<P extends { style?: AnyObject } = {}>({
    Component,
    children,
}: StylesheetConsumerProps<P>): JSX.Element {
    return (
        <StylesheetContext.Consumer>
            {(stylesheets) => children(stylesheets[getComponentStylesheetName(Component)])}
        </StylesheetContext.Consumer>
    );
}
