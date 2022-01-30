import { ComponentType } from "react";
import { cx } from "@peersyst/react-utils";
import { useTheme } from "./useTheme";

export type AddClassName<T> = Omit<T, "className"> & WithClassName;
export interface WithClassName {
    className?: string;
}

export function withThemeClassName<TProps>(
    WrappedComponent: ComponentType<TProps>,
): ComponentType<AddClassName<TProps>> {
    // eslint-disable-next-line react/display-name
    return ({ className, ...otherProps }: any): JSX.Element => {
        const { colorScheme } = useTheme();

        return <WrappedComponent className={cx(className, colorScheme)} {...otherProps} />;
    };
}
