import { BlockchainAddressProps } from "./BlockchainAddress.types";
import { Hash } from "../Hash";
import { cx } from "@peersyst/react-utils";
import { useComponentConfig, useMergeDefaultProps } from "@peersyst/react-components-core";

const BlockchainAddress = (props: BlockchainAddressProps): JSX.Element => {
    const { address, type, className, addressToShareData, ...hashProps } = useMergeDefaultProps(
        "BlockchainAddress",
        props,
    );

    const { blockchainLinks } = useComponentConfig("BlockchainAddress");
    const url = blockchainLinks[type] + address;

    return (
        <Hash
            className={cx("BlockchainAddress", className)}
            hashToShareData={addressToShareData}
            hash={address}
            url={url}
            {...hashProps}
        />
    );
};

export default BlockchainAddress;
