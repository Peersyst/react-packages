export interface CopyToClipboardParams {
    /**
     * Text to be copied to clipboard
     */
    text?: string;
    /**
     * Message to be shown in toast when text is copied to clipboard
     */
    toastMessage?: string;
    /**
     * Whether to show toast when text is copied to clipboard
     */
    showToastOnCopy?: boolean;
}

export type UseCopyToClipboard = (params: CopyToClipboardParams) => Promise<void>;
