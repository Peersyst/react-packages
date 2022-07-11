import { ComponentType } from "react";
import { cx } from "@peersyst/react-utils";
import { useTheme } from "@peersyst/react-components-core";

export type AddClassName<T> = Omit<T, "className"> & WithClassName;
export interface WithClassName {
    className?: string;
}

export function withThemeClassName<TProps>(
    WrappedComponent: ComponentType<TProps>,
): ComponentType<AddClassName<TProps>> {
    // eslint-disable-next-line react/display-name
    return ({ className, ...otherProps }: any): JSX.Element => {
        const theme = useTheme();

        return <WrappedComponent className={cx(className, theme.palette.mode)} {...otherProps} />;
    };
}
