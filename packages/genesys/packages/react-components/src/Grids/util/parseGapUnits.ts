export default function (gap: number | string | undefined): string {
    if (!gap) return "20px";
    return typeof gap === "number" ? gap.toString() + "px" : gap;
}
