import { useColor } from "@peersyst/react-components-core";
import { ComponentType } from "react";
import { WithColor, WithColorProps } from "./withColor.types";

export default function withColor<TProps extends WithColorProps>(
    WrappedComponent: ComponentType<TProps>,
): ComponentType<WithColor<TProps>> {
    return ({ color: colorProp, ...componentProps }: WithColor<TProps>) => {
        const color = useColor(colorProp);
        return <WrappedComponent {...(componentProps as TProps)} color={color} />;
    };
}
