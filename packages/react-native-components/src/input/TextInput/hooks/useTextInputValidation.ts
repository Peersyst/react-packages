import {
    CustomValidators,
    Validators,
    useTextInputValidation as useCoreTextInputValidation,
} from "@peersyst/react-components-core";
import { useTheme } from "@peersyst/react-native-styled";

export function useTextInputValidation(
    rawValidators?: Validators,
    customValidators?: CustomValidators,
): (value: string) => [boolean, string | undefined] {
    const { translate, validators: extraValidators } = useTheme();

    return useCoreTextInputValidation(translate, extraValidators, rawValidators, customValidators);
}
