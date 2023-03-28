import useShare from "../../../hooks/useShare/useShare";
import { HashProps } from "../Hash.types";

export interface UseShareHashParams {
    hash: string;
    hashToSharePayload: HashProps["hashToSharePayload"];
}

export default function useShareHash({ hash, hashToSharePayload }: UseShareHashParams) {
    const { share } = useShare();

    async function shareHash() {
        const sharePayload = hashToSharePayload?.(hash) || { shareContent: { message: hash } };
        await share(sharePayload);
    }

    return shareHash;
}
