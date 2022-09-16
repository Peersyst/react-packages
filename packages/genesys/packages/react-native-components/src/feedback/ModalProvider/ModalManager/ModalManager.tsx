import { findNodeHandle, TouchableWithoutFeedback, View } from "react-native";
import { Children, ReactNode, useRef } from "react";
import { ModalManagerProvider } from "./ModalManagerContext";

export interface ModalManagerProps {
    children: ReactNode;
}

export function ModalManager({ children }: ModalManagerProps): JSX.Element {
    const modalManagerRef = useRef<number | null>();

    const handleModalManagerRef = (ref: View) => {
        // Find native component
        modalManagerRef.current = findNodeHandle(ref);
    };

    const modals = Children.toArray(children).map((modal, index) => (
        <TouchableWithoutFeedback key={index.toString()}>{modal}</TouchableWithoutFeedback>
    ));

    return (
        <ModalManagerProvider value={{ modalManagerRef }}>
            <View
                style={{ position: "absolute", width: "100%", height: "100%" }}
                ref={handleModalManagerRef}
            >
                {modals}
            </View>
        </ModalManagerProvider>
    );
}
