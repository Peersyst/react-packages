import { HashProps } from "./Hash.types";
import { formatHash } from "@peersyst/react-utils";
import { createRef } from "react";
import useHashAutoLength from "./hook/useHashAutoLength";
import { CopyButton } from "../CopyButton";
import { useTheme } from "../theme";
import { HashRoot, HashText } from "./Hash.styles";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import HashWrapper from "./HashWrapper";
import clsx from "clsx";

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
        action,
        showCopyIcon,
        color,
        hashToShareData,
        ...typographyProps
    } = useMergeDefaultProps("Hash", props);
    const { typography } = useTheme();

    const isAutoLength = length === "auto";
    const rowRef = createRef<HTMLDivElement>();
    const hashRef = createRef<HTMLAnchorElement | HTMLSpanElement>();
    const copyButtonRef = createRef<HTMLButtonElement>();

    const autoLength = useHashAutoLength(isAutoLength, hash, gap, rowRef, hashRef, copyButtonRef);
    const formattedHash = formatHash(
        hash,
        ellipsis,
        isAutoLength ? autoLength : typeof length === "number" ? length : hash.length,
    );

    return (
        <HashRoot
            autoLength={isAutoLength}
            gap={gap}
            className={clsx("Hash", className)}
            style={style}
            ref={rowRef}
        >
            <HashWrapper
                ref={hashRef}
                url={url}
                action={action}
                hashToShareData={hashToShareData}
                hash={hash}
            >
                <HashText variant={variant} break={breakProp} color={color} {...typographyProps}>
                    {formattedHash}
                </HashText>
            </HashWrapper>
            {showCopyIcon && (
                <CopyButton
                    text={hash}
                    style={
                        variant !== "inherit" ? typography[variant].style : { fontSize: "inherit" }
                    }
                    ref={copyButtonRef}
                    color={color}
                />
            )}
            {/*TODO: add share Icon */}
        </HashRoot>
    );
};

export default Hash;
