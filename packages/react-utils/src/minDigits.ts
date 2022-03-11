export default function (n: number | string, d: number): string {
    const num = n.toString();
    return [...Array(d - num.length)].reduce((prev = "") => prev + "0", "") + num;
}
