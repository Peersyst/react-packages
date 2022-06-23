import { HashProps } from "./Hash.types";
import { cx, formatAddress } from "@peersyst/react-utils";
import { createRef } from "react";
import useHashAutoLength from "./hook/useHashAutoLength";
import { CopyButton } from "../CopyButton";
import { useTheme } from "../Theme";
import { HashRoot, HashText } from "./Hash.styles";

const Hash = ({
    hash,
    ellipsis,
    length = "auto",
    className,
    style,
    break: breakProp = false,
    variant,
    gap = 5,
    ...typographyProps
}: HashProps): JSX.Element => {
    const {
        theme: { typography },
    } = useTheme();

    const isAutoLength = length === "auto";

    const rowRef = createRef<HTMLDivElement>();
    const hashRef = createRef<HTMLAnchorElement>();
    const copyButtonRef = createRef<HTMLButtonElement>();

    const autoLength = useHashAutoLength(isAutoLength, hash, gap, rowRef, hashRef, copyButtonRef);

    return (
        <HashRoot
            autoLength={isAutoLength}
            gap={gap}
            className={cx("BlockchainAddress", className)}
            style={style}
            ref={rowRef}
        >
            <HashText variant={variant} break={breakProp} {...typographyProps}>
                {formatAddress(
                    hash,
                    ellipsis,
                    isAutoLength ? autoLength : typeof length === "number" ? length : hash.length,
                )}
            </HashText>
            <CopyButton
                text={hash}
                style={variant !== "inherit" ? typography[variant].style : { fontSize: "inherit" }}
                ref={copyButtonRef}
            />
        </HashRoot>
    );
};

export default Hash;
