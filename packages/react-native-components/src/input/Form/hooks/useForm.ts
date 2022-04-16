import { useContext } from "react";
import { FormContext } from "../FormContext";

export interface UseFormResult {
    valid: boolean;
    handleSubmit: () => any;
}

export default function useForm(): UseFormResult {
    const { valid, handleSubmit } = useContext(FormContext);
    return { valid, handleSubmit };
}
