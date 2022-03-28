import { BlockchainAddressProps } from "./BlockchainAddress.types";
import { Row } from "../Row";
import { Typography } from "../Typography";
import { CopyButton } from "../CopyButton";
import { useTheme } from "../Theme";
import { cx, formatAddress } from "@peersyst/react-utils";
import { BlockchainAddressText } from "./BlockchainAddress.styles";

const BlockchainAddress = ({
    address,
    ellipsis,
    type,
    length,
    className,
    break: breakProp = false,
    ...typographyProps
}: BlockchainAddressProps): JSX.Element => {
    const {
        theme: { blockchainLinks },
    } = useTheme();

    return (
        <Row alignItems="center" gap={5} className={cx("BlockchainAddress", className)}>
            <a href={blockchainLinks[type] + address} target="_blank" rel="noreferrer">
                <BlockchainAddressText break={breakProp} {...typographyProps}>
                    {formatAddress(address, ellipsis, length)}
                </BlockchainAddressText>
            </a>
            <Typography {...typographyProps}>
                <CopyButton text={address} />
            </Typography>
        </Row>
    );
};

export default BlockchainAddress;
