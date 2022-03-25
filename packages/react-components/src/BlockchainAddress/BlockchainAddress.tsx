import { BlockchainAddressProps } from "./BlockchainAddress.types";
import { Row } from "../Row";
import { Typography } from "../Typography";
import { CopyButton } from "../CopyButton";
import { useTheme } from "../Theme";
import { cx } from "@peersyst/react-utils";

// react-utils
export type BlockchainAddressEllipsis = "middle" | "end";
function formatAddress(
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

const BlockchainAddress = ({
    address,
    ellipsis,
    type,
    length,
    className,
    ...typographyProps
}: BlockchainAddressProps): JSX.Element => {
    const {
        theme: { blockchainLinks },
    } = useTheme();

    return (
        <Row alignItems="center" gap={5} className={cx("BlockchainAddress", className)}>
            <a href={blockchainLinks[type] + address} target="_blank" rel="noreferrer">
                <Typography {...typographyProps}>
                    {formatAddress(address, ellipsis, length)}
                </Typography>
            </a>
            <Typography {...typographyProps}>
                <CopyButton text={address} />
            </Typography>
        </Row>
    );
};

export default BlockchainAddress;
