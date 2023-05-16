import { useColor } from "@peersyst/react-components-core";
import { JSXElementConstructor } from "react";
import { ThemeColorProps, WithColor, WithColorProps } from "./withColor.types";

export default function withColor<TProps extends WithColorProps>(
    WrappedComponent: JSXElementConstructor<TProps>,
    colorProps: ThemeColorProps = {},
): JSXElementConstructor<WithColor<TProps>> {
    return ({ color: colorProp, ...componentProps }: WithColor<TProps>) => {
        const { color: defaultColor } = colorProps;
        const color = useColor(colorProp || defaultColor);
        return <WrappedComponent {...(componentProps as TProps)} color={color} />;
    };
}
