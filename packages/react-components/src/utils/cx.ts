/**
 * Accepts classNames as params and merges them into a single className string
 * @param classes classNames
 */
export function cx(...classes: (string | false | undefined)[]): string {
    return classes.filter((c) => c && c !== "").join(" ");
}
