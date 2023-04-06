export default function isAccessor(value: any): boolean {
    return typeof value === "function" && value.isStyledAccessor === true;
}
