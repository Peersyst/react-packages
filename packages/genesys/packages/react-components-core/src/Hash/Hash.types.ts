import { HashEllipsis } from "@peersyst/react-utils";

export type HashAction = "share" | "copy" | "link" | ((hash: string) => unknown);

export interface CoreHashProps {
    /**
     * Hash
     */
    hash: string;
    /**
     * If ellipsis should be in the middle or end
     */
    ellipsis?: HashEllipsis;
    /**
     * Gap between the hash and copy button
     */
    gap?: number; //TODO: add spacing
    /**
     * Url of the link attached to the hash
     * @see action
     */
    url?: string;
    /**
     * Show Icon copy
     */
    showCopyIcon?: boolean;
    /**
     * onClick action to the hash action
     * - share: Share the hash to social media (only for mobile)
     * - copy: Copy to clipboard the hash
     * - link: Open the url
     * - custom action function
     */
    action?: HashAction;
}
