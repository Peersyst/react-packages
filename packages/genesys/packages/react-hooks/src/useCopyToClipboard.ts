import { useState } from "react";

export interface UseCopyToClipboardParams {
    onCopy?: () => unknown;
}

export interface UseCopyToClipboardReturn {
    isLoading: boolean;
    copyToClipboard: (messsage: string) => Promise<void>;
}

export default function useCopyToClipboard({
    onCopy,
}: UseCopyToClipboardParams = {}): UseCopyToClipboardReturn {
    const [isLoading, setIsLoading] = useState(false);

    async function copyToClipboard(message: string) {
        setIsLoading(true);
        await navigator.clipboard.writeText(message);
        setIsLoading(false);
        onCopy?.();
    }

    return {
        isLoading,
        copyToClipboard,
    };
}
