import { TouchableWithoutFeedback } from "react-native";
import { useModalState } from "@peersyst/react-components-core";

export function ModalManager(): JSX.Element {
    const stateModals = useModalState();

    const modals = stateModals.map((modal, index) => (
        <TouchableWithoutFeedback key={index.toString()}>{modal}</TouchableWithoutFeedback>
    ));

    return <>{modals}</>;
}
