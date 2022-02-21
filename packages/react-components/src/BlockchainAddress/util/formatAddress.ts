import { BlockchainAddressEllipsis } from "../BlockchainAddress.types";

export function formatAddress(
    address: string,
    ellipsis: BlockchainAddressEllipsis = "middle",
    length?: number,
): string {
    const addressLength = address.length;
    if (!length || addressLength < length) return address;
    else if (ellipsis === "middle") {
        const firstHalf = length / 2;
        const secondHalf = length - firstHalf;
        return (
            address.substring(0, firstHalf) +
            "..." +
            address.substring(addressLength - secondHalf, addressLength)
        );
    } else return address.substring(0, length);
}
