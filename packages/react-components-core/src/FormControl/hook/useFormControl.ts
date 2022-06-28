import { FormControlContextType } from "../FormControl.types";
import { useContext } from "react";
import FormControlContext from "../FormControlContext";

export default function (): FormControlContextType {
    return useContext(FormControlContext);
}
