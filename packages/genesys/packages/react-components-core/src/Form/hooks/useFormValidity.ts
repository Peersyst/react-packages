import { useContext } from "react";
import { FormContext } from "../FormContext";

export default function (): boolean {
    const { valid } = useContext(FormContext);

    return valid;
}
