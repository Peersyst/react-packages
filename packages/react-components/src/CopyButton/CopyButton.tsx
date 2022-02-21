import { CopyButtonProps } from "./CopyButton.types";
import { useState } from "react";
import { IconButton } from "../IconButton";
import useCopyElement from "./hook/useCopyElement";
import { cx } from "@peersyst/react-utils";

const CopyButton = ({
    text,
    onCopy,
    disabled,
    className,
    ...rest
}: CopyButtonProps): JSX.Element => {
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);
    const [hovered, setHovered] = useState(false);

    const copyElement = useCopyElement(loading, copied, hovered);

    const handleCopy = async () => {
        setLoading(true);
        await navigator.clipboard.writeText(text);
        setLoading(false);
        setHovered(false);
        setCopied(true);
        onCopy?.();
    };

    return (
        <IconButton
            onClick={handleCopy}
            disabled={loading || disabled}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={cx("CopyButton", className)}
            {...rest}
        >
            {copyElement}
        </IconButton>
    );
};

export default CopyButton;
