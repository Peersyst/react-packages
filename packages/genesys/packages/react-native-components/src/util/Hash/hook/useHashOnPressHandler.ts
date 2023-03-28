import { Linking } from "react-native";
import useCopyToClipboard from "../../../hooks/useCopyToClipboard/useCopyToClipboard";
import { HashProps } from "../Hash.types";
import useShareHash, { UseShareHashParams } from "./useShareHash";

export interface UseHashOnPressHandlerParams extends UseShareHashParams {
    url: string | undefined;
    action: HashProps["action"];
}

export default function useHashOnPressHandler({
    hash,
    url,
    action,
    hashToSharePayload,
}: UseHashOnPressHandlerParams) {
    const copyToClipboard = useCopyToClipboard();
    const shareHash = useShareHash({ hash, hashToSharePayload });

    async function handleOnPress() {
        switch (action) {
            case "copy":
                await copyToClipboard({ text: hash });
                break;
            case "share":
                await shareHash();
                break;
            case "link":
                if (url) Linking.openURL(url);
                break;
            default:
                if (typeof action === "function") action(hash);
                break;
        }
    }
    return handleOnPress;
}
