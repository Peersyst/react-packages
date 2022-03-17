export type BlockchainAddressEllipsis = "middle" | "end";

export default function formatAddress(
    address: string,
    ellipsis: BlockchainAddressEllipsis = "middle",
    length?: number,
): string {
    const addressLength = address.length;
    if (!length) return address;
    else if (ellipsis === "middle") {
        if (addressLength - 2 <= length * 2) return address;
        return (
            address.substring(0, 2 + length) +
            "..." +
            address.substring(addressLength - length, addressLength)
        );
    } else {
        if (addressLength - 2 <= length) return address;
        return address.substring(0, 2 + length) + "...";
    }
}
