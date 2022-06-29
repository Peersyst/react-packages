import { BlockchainAddressProps } from "./BlockchainAddress.types";
import { useTheme } from "../Theme";
import { Hash } from "../Hash";
import { cx } from "@peersyst/react-utils";

const BlockchainAddress = ({
    address,
    type,
    className,
    ...hashProps
}: BlockchainAddressProps): JSX.Element => {
    const {
        theme: { blockchainLinks },
    } = useTheme();

    return (
        <Hash
            className={cx("BlockchainAddress", className)}
            hash={address}
            url={blockchainLinks[type] + address}
            {...hashProps}
        />
    );
};

export default BlockchainAddress;
