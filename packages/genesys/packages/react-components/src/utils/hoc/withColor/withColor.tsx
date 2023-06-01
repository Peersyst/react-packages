import { ThemeColor, useColor } from "@peersyst/react-components-core";
import { JSXElementConstructor } from "react";
import { WithColor, WithColorProps } from "./withColor.types";

export default function withColor<TProps extends WithColorProps>(
    WrappedComponent: JSXElementConstructor<TProps>,
    defaultColor?: ThemeColor,
): JSXElementConstructor<WithColor<TProps>> {
    return ({ color: colorProp, ...componentProps }: WithColor<TProps>) => {
        const color = useColor(colorProp || defaultColor);
        return <WrappedComponent {...(componentProps as TProps)} color={color} />;
    };
}
