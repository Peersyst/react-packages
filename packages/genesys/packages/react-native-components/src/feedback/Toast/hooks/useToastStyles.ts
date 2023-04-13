import { AlertStyle } from "../../Alert";
import { ToastProps } from "../Toast.types";
import { useComputeStyles } from "../../../hooks";
export default function useToastStyles(props: ToastProps): AlertStyle {
    return useComputeStyles("Toast", props);
}
