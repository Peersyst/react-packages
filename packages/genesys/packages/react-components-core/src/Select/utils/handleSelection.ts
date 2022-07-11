export function handleSelection<T>(
    value: T,
    selected: T | T[] = [],
    multiple: boolean,
    isSelected: boolean,
): T | T[] {
    if (multiple) {
        const selectedArray = selected as unknown[];
        //@ts-ignore
        return isSelected ? selectedArray.filter((v) => v !== value) : selectedArray.concat(value);
    } else return value;
}
