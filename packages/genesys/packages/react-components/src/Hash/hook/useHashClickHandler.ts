import { HashAction } from "@peersyst/react-components-core";
import { useCopyToClipboard } from "@peersyst/react-hooks";
import useShareHash, { ShareHashParams } from "./useShareHash";

export interface UseHashOnClickHandlerParams extends ShareHashParams {
    action: HashAction | undefined;
}

export default function useHashOnClickHandler({
    action,
    hash,
    hashToShareData,
}: UseHashOnClickHandlerParams) {
    const { copyToClipboard } = useCopyToClipboard();
    const shareHash = useShareHash();

    async function handleClick() {
        switch (action) {
            case "copy":
                await copyToClipboard(hash);
                break;
            case "share":
                await shareHash({ hash, hashToShareData });
                break;
            default:
                if (typeof action === "function") action(hash);
                break;
        }
    }

    return handleClick;
}
