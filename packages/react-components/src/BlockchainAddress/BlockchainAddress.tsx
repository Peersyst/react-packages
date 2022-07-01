import { BlockchainAddressProps } from "./BlockchainAddress.types";
import { Hash } from "../Hash";
import { cx } from "@peersyst/react-utils";
import { useComponentConfig, useMergeDefaultProps } from "@peersyst/react-components-core";

const BlockchainAddress = (props: BlockchainAddressProps): JSX.Element => {
    const { address, type, className, ...hashProps } = useMergeDefaultProps(
        "BlockchainAddress",
        props,
    );

    const { blockchainLinks } = useComponentConfig("BlockchainAddress");

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
