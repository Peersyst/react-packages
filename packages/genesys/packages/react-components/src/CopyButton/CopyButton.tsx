import { CopyButtonProps } from "./CopyButton.types";
import { forwardRef, useRef, useState } from "react";
import { IconButton } from "../IconButton";
import useCopyElement from "./hook/useCopyElement";
import { cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const CopyButton = forwardRef((props: CopyButtonProps, ref): JSX.Element => {
    const { text, onCopy, disabled, className, ...rest } = useMergeDefaultProps(
        "CopyButton",
        props,
    );

    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);
    const [hovered, setHovered] = useState(false);

    const copyElement = useCopyElement(loading, copied, hovered);

    const loadingTimeout = useRef<NodeJS.Timeout>();
    const handleCopy = async () => {
        setLoading(true);
        await navigator.clipboard.writeText(text);
        setLoading(false);
        setHovered(false);
        setCopied(true);
        onCopy?.();
        if (loadingTimeout.current) clearTimeout(loadingTimeout.current);
        loadingTimeout.current = setTimeout(() => setCopied(false), 4000);
    };

    return (
        <IconButton
            onClick={handleCopy}
            disabled={loading || disabled}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={cx("CopyButton", className)}
            ref={ref}
            {...rest}
        >
            {copyElement}
        </IconButton>
    );
});
CopyButton.displayName = "CopyButton";

export default CopyButton;
