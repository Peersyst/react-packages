import { ViewStyle } from "react-native";
import { ModalProps } from "../Modal.types";
import { useComputeStyles } from "../../../hooks";

export default function useModalSyles(props: ModalProps): ViewStyle {
    return useComputeStyles("Modal", props);
}
