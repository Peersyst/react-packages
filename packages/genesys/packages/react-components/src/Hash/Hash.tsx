import { HashProps } from "./Hash.types";
import { cx, formatHash } from "@peersyst/react-utils";
import { createRef } from "react";
import useHashAutoLength from "./hook/useHashAutoLength";
import { CopyButton } from "../CopyButton";
import { useTheme } from "../theme";
import { HashRoot, HashText, HashLink } from "./Hash.styles";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const Hash = (props: HashProps): JSX.Element => {
    const {
        hash,
        ellipsis,
        length = "auto",
        className,
        style,
        break: breakProp = false,
        variant,
        url,
        gap = 5,
        copy = true,
        ...typographyProps
    } = useMergeDefaultProps("Hash", props);
    const { typography } = useTheme();

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

            {copy && (
                <CopyButton
                    text={hash}
                    style={
                        variant !== "inherit" ? typography[variant].style : { fontSize: "inherit" }
                    }
                    ref={copyButtonRef}
                />
            )}
        </HashRoot>
    );
};

export default Hash;
