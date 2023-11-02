export function itemIsSelected(
    value: unknown,
    selected: unknown | unknown[],
    multiple: boolean,
    compare: (a: unknown, b: unknown) => boolean = (a, b) => a === b,
): boolean {
    if (selected === undefined) return false;
    if (multiple) return !!(selected as unknown[]).find((v) => compare(v, value));
    else return compare(selected, value);
}
