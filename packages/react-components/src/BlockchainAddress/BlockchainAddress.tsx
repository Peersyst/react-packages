import { BlockchainAddressProps } from "./BlockchainAddress.types";
import { Row } from "../Row";
import { Typography } from "../Typography";
import { CopyButton } from "../CopyButton";
import { formatAddress } from "./util/formatAddress";
import { useTheme } from "../Theme";
import { cx } from "@peersyst/react-utils";

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
