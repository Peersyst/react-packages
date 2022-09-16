import { TouchableWithoutFeedback } from "react-native";
import { Children, ReactNode } from "react";

export interface ModalManagerProps {
    children: ReactNode;
}

export function ModalManager({ children }: ModalManagerProps): JSX.Element {
    const modals = Children.toArray(children).map((modal, index) => (
        <TouchableWithoutFeedback key={index.toString()}>{modal}</TouchableWithoutFeedback>
    ));

    return <>{modals}</>;
}
