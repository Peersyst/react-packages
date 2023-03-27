import { CopyButtonProps } from "./CopyButton.types";
import { forwardRef, useRef, useState } from "react";
import { IconButton } from "../IconButton";
import useCopyElement from "./hook/useCopyElement";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { useCopyToClipboard } from "@peersyst/react-hooks";
import clsx from "clsx";

const CopyButton = forwardRef((props: CopyButtonProps, ref): JSX.Element => {
    const {
        text,
        onCopy,
        disabled: disabledProp,
        className,
        ...rest
    } = useMergeDefaultProps("CopyButton", props);

    //Hooks
    const { isLoading, copyToClipboard } = useCopyToClipboard();
    const [copied, setCopied] = useState(false);
    const [hovered, setHovered] = useState(false);
    const copyElement = useCopyElement(isLoading, copied, hovered);

    //Variables
    const loadingTimeout = useRef<NodeJS.Timeout>();
    const disabled = isLoading || disabledProp;

    //Handlers
    async function handleCopy() {
        await copyToClipboard(text);
        setHovered(false);
        setCopied(true);
        onCopy?.();
        if (loadingTimeout.current) clearTimeout(loadingTimeout.current);
        loadingTimeout.current = setTimeout(() => setCopied(false), 4000);
    }

    return (
        <IconButton
            onClick={handleCopy}
            disabled={disabled}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={clsx("CopyButton", className)}
            ref={ref}
            {...rest}
        >
            {copyElement}
        </IconButton>
    );
});

CopyButton.displayName = "CopyButton";

export default CopyButton;
