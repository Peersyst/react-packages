import { ThemeColor } from "../theme";

export type WithParsedThemeColor<T> = Omit<T, "color"> & {
    color: string | undefined;
};

export type CoreComponentProps<O extends "component" | "color" | never = never> =
    (O extends "component" ? { component?: React.ElementType } : {}) &
        (O extends "color" ? { color?: ThemeColor } : {});
