import { ComponentType } from "react";
import { useTheme } from "./useTheme";

interface WithTheme {
    theme: object;
}

export function withTheme<TProps>(
    WrappedComponent: ComponentType<TProps>,
): ComponentType<TProps & WithTheme> {
    // eslint-disable-next-line react/display-name
    return (props: any): JSX.Element => {
        const { theme } = useTheme();

        return <WrappedComponent theme={theme} {...props} />;
    };
}
