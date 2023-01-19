export function escapeRegExp(value: string) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

export function escapeReplaceAll(value: string, find: string, replace: string): string {
    return value.replace(new RegExp(escapeRegExp(find), "g"), replace);
}
