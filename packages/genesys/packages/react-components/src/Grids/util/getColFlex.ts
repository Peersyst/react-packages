export default function (v: number | number[]): number {
    return typeof v === "number" ? v : v[0];
}
