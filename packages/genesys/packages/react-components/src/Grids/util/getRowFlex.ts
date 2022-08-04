export default function (v: number | number[]): number {
    return typeof v === "number" ? 1 : v[1] || 1;
}
