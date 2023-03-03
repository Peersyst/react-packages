import { useColor } from "@peersyst/react-components-core";
import { JSXElementConstructor } from "react";
import { WithColor, WithColorProps } from "./withColor.types";

export default function withColor<TProps extends WithColorProps>(
    WrappedComponent: JSXElementConstructor<TProps>,
): JSXElementConstructor<WithColor<TProps>> {
    return ({ color: colorProp, ...componentProps }: WithColor<TProps>) => {
        const color = useColor(colorProp);
        return <WrappedComponent {...(componentProps as TProps)} color={color} />;
    };
}
