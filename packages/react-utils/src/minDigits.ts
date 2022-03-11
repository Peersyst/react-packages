export interface MinDigitsOptions {
    fill?: "left" | "right";
}

export default function (
    n: number | string,
    d: number,
    { fill = "left" }: MinDigitsOptions = {},
): string {
    const num = n.toString();
    const dif = d - num.length;
    const zeros = dif > 0 ? [...Array(dif)].reduce((prev = "") => prev + "0", "") : "";
    return (fill === "left" ? zeros : "") + num + (fill === "right" ? zeros : "");
}
