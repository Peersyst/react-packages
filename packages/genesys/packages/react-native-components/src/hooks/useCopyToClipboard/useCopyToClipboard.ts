import { Clipboard } from "@peersyst/react-native-utils";
import { useToast } from "../../feedback/ToastProvider";
import { useTranslate } from "@peersyst/react-components-core";
import { CopyToClipboardParams, UseCopyToClipboard } from "./useCopyToClipboard.types";

export default function useCopyToClipboard(): UseCopyToClipboard {
    const { showToast } = useToast();
    const translate = useTranslate();

    async function copyToClipboard({
        text,
        toastMessage,
        showToastOnCopy = true,
    }: CopyToClipboardParams): Promise<void> {
        await Clipboard.setStringAsync(text || "");
        if (showToastOnCopy) {
            //TODO: Change locale_keys to camelCaseLocaleKeys
            showToast(toastMessage ?? translate("copied_to_clipboard"), { type: "success" });
        }
    }

    return copyToClipboard;
}
