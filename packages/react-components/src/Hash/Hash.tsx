import { HashProps } from "./Hash.types";
import { cx, formatHash } from "@peersyst/react-utils";
import { createRef } from "react";
import useHashAutoLength from "./hook/useHashAutoLength";
import { CopyButton } from "../CopyButton";
import { useTheme } from "../Theme";
import { HashRoot, HashText, HashLink } from "./Hash.styles";

const Hash = ({
    hash,
    ellipsis,
    length = "auto",
    className,
    style,
    break: breakProp = false,
    variant,
    url,
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
            className={cx("Hash", className)}
            style={style}
            ref={rowRef}
        >
            <HashLink href={url} target="_blank" rel="noreferrer" ref={hashRef} url={url}>
                <HashText variant={variant} break={breakProp} {...typographyProps}>
                    {formatHash(
                        hash,
                        ellipsis,
                        isAutoLength
                            ? autoLength
                            : typeof length === "number"
                            ? length
                            : hash.length,
                    )}
                </HashText>
            </HashLink>
            <CopyButton
                text={hash}
                style={variant !== "inherit" ? typography[variant].style : { fontSize: "inherit" }}
                ref={copyButtonRef}
            />
        </HashRoot>
    );
};

export default Hash;
