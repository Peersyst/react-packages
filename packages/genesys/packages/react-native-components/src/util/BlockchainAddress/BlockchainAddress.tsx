import { BlockchainAddressProps } from "./BlockchainAddress.types";
import { useComponentConfig, useMergeDefaultProps } from "@peersyst/react-components-core";
import Hash from "../Hash/Hash";

const BlockchainAddress = (props: BlockchainAddressProps): JSX.Element => {
    //Hooks
    const { address, type, addressToSharePayload, ...rest } = useMergeDefaultProps(
        "BlockchainAddress",
        props,
    );
    const { blockchainLinks } = useComponentConfig("BlockchainAddress");

    //Variables
    const url = blockchainLinks[type] + address;

    return <Hash hash={address} hashToSharePayload={addressToSharePayload} url={url} {...rest} />;
};

export default BlockchainAddress;
