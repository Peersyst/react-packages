export type HashEllipsis = "middle" | "end";

export default function formatHash(
    hash: string,
    ellipsis: HashEllipsis = "middle",
    length?: number,
): string {
    const addressLength = hash.length;
    if (!length) return hash;
    else if (ellipsis === "middle") {
        if (addressLength - 2 <= length * 2) return hash;
        return (
            hash.substring(0, 2 + length) +
            "..." +
            hash.substring(addressLength - length, addressLength)
        );
    } else {
        if (addressLength - 2 <= length) return hash;
        return hash.substring(0, 2 + length) + "...";
    }
}
