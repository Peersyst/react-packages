import { ThemeColor } from "../theme";

export type WithParsedThemeColor<T> = Omit<T, "color"> & {
    color: string | undefined;
};
