import { Breakpoint, DefaultThemeBreakpointValues, ThemeBreakpoints } from "./styles.types";

export const createBreakpoints = (values: DefaultThemeBreakpointValues): ThemeBreakpoints => {
    const keys = Object.keys(values);

    function up(key: Breakpoint | number) {
        const value = typeof key === "number" ? key : values[key];
        return `@media (min-width:${value}px)`;
    }

    function down(key: Breakpoint | number) {
        const value = typeof key === "number" ? key : values[key];
        return `@media (max-width:${value}px)`;
    }

    function between(start: Breakpoint | number, end: Breakpoint | number) {
        return (
            `@media (min-width:${typeof start === "number" ? start : values[start]}px) and ` +
            `(max-width:${typeof end === "number" ? end : values[end]}px)`
        );
    }

    function only(key: Breakpoint) {
        if (keys.indexOf(key) + 1 < keys.length) {
            return between(key, keys[keys.indexOf(key) + 1] as Breakpoint);
        }

        return up(key);
    }

    function not(key: Breakpoint) {
        const keyIndex = keys.indexOf(key);
        if (keyIndex === 0) {
            return up(keys[1] as Breakpoint);
        }
        if (keyIndex === keys.length - 1) {
            return down(keys[keyIndex] as Breakpoint);
        }

        return between(key, keys[keys.indexOf(key) + 1] as Breakpoint).replace(
            "@media",
            "@media not all and",
        );
    }

    return {
        values,
        up,
        down,
        between,
        only,
        not,
    };
};
