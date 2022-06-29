import { useTheme } from "../../Theme";
import {
    CustomValidators,
    Validators,
    useTextInputValidation as useCoreTextInputValidation,
} from "@peersyst/react-components-core";

export function useTextInputValidation(
    rawValidators?: Validators,
    customValidators?: CustomValidators,
): (value: string) => [boolean, string | undefined] {
    const {
        theme: { translate, validators: extraValidators },
    } = useTheme();

    return useCoreTextInputValidation(translate, extraValidators, rawValidators, customValidators);
}
