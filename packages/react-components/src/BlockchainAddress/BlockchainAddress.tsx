import { BlockchainAddressProps } from "./BlockchainAddress.types";
import { cx, formatAddress } from "@peersyst/react-utils";
import { BlockchainAddressRoot, BlockchainAddressText } from "./BlockchainAddress.styles";
import { createRef } from "react";
import useBlockchainAddressAutoLength from "./hook/useBlockchainAddressAutoLength";
import { CopyButton } from "../CopyButton";
import { useTheme } from "../Theme";

const BlockchainAddress = ({
    address,
    ellipsis,
    type,
    length = "auto",
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

    const isAutoLength = length === "auto";

    const rowRef = createRef<HTMLDivElement>();
    const addressRef = createRef<HTMLAnchorElement>();
    const copyButtonRef = createRef<HTMLButtonElement>();

    const autoLength = useBlockchainAddressAutoLength(
        isAutoLength,
        address,
        gap,
        rowRef,
        addressRef,
        copyButtonRef,
    );

    return (
        <BlockchainAddressRoot
            autoLength={isAutoLength}
            gap={gap}
            className={cx("BlockchainAddress", className)}
            style={style}
            ref={rowRef}
        >
            <a
                href={blockchainLinks[type] + address}
                target="_blank"
                rel="noreferrer"
                ref={addressRef}
            >
                <BlockchainAddressText variant={variant} break={breakProp} {...typographyProps}>
                    {formatAddress(
                        address,
                        ellipsis,
                        isAutoLength
                            ? autoLength
                            : typeof length === "number"
                            ? length
                            : address.length,
                    )}
                </BlockchainAddressText>
            </a>
            <CopyButton
                text={address}
                style={variant !== "inherit" ? typography[variant].style : { fontSize: "inherit" }}
                ref={copyButtonRef}
            />
        </BlockchainAddressRoot>
    );
};

export default BlockchainAddress;
