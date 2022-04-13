import { BlockchainAddressProps } from "./BlockchainAddress.types";
import { Row } from "../Row";
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
    style,
    break: breakProp = false,
    variant,
    gap = 5,
    ...typographyProps
}: BlockchainAddressProps): JSX.Element => {
    const {
        theme: { blockchainLinks, typography },
    } = useTheme();

    return (
        <Row
            alignItems="center"
            gap={gap}
            className={cx("BlockchainAddress", className)}
            style={style}
        >
            <a href={blockchainLinks[type] + address} target="_blank" rel="noreferrer">
                <BlockchainAddressText variant={variant} break={breakProp} {...typographyProps}>
                    {formatAddress(address, ellipsis, length)}
                </BlockchainAddressText>
            </a>
            <CopyButton
                text={address}
                style={variant !== "inherit" ? typography[variant].style : { fontSize: "inherit" }}
            />
        </Row>
    );
};

export default BlockchainAddress;
