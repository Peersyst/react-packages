import { ButtonType, FormContext } from "@peersyst/react-components-core";
import { useContext } from "react";

export interface UseButtonSubmitParams {
    disabled: boolean;
    loading: boolean;
    type?: ButtonType;
    action?: string;
}

export interface UseButtonSubmitResult {
    /**
     * Button can be interacted with
     */
    enabled: boolean;
    /**
     * Submit form handler with implicit action
     */
    handleSubmit: (() => void) | undefined;
}

export default function useButtonSubmit({
    disabled,
    loading,
    type,
    action,
}: UseButtonSubmitParams): UseButtonSubmitResult {
    const { valid, handleSubmit: submit } = useContext(FormContext);
    const enabled = disabled || loading || (type === "submit" && valid === false);

    const handleSubmit = () => {
        submit(action);
    };

    return {
        enabled,
        handleSubmit: type === "submit" ? handleSubmit : undefined,
    };
}
