import { ComponentType } from "react";
import { cx } from "../utils/cx";
import { useTheme } from "./useTheme";

export type AddClassName<T> = Omit<T, "className"> & WithClassName;
export interface WithClassName {
    className?: string;
}

export function withThemeClassName<TProps>(WrappedComponent: ComponentType<TProps>): ComponentType<AddClassName<TProps>> {
    return ({ className, ...otherProps }: any): JSX.Element => {
        const { colorScheme } = useTheme();

        return <WrappedComponent className={cx(className, colorScheme)} {...otherProps} />;
    };
}
