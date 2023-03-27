export interface CopyToClipboardParams {
    message?: string;
    toastMessage?: string;
}

export type UseCopyToClipboard = (params: CopyToClipboardParams) => Promise<void>;
