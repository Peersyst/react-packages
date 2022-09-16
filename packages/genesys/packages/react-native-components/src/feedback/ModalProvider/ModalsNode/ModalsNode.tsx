import { findNodeHandle, View } from "react-native";
import { ReactNode, useRef } from "react";
import { ModalsNodeProvider } from "./ModalsNodeContext";

export interface ModalsNodeProps {
    children: ReactNode;
}

export function ModalsNode({ children }: ModalsNodeProps): JSX.Element {
    const modalsNodeRef = useRef<number | null>();

    const handleModalsNodeRef = (ref: View) => {
        // Find native component
        modalsNodeRef.current = findNodeHandle(ref);
    };

    return (
        <ModalsNodeProvider value={modalsNodeRef}>
            <View
                style={{ position: "absolute", width: "100%", height: "100%" }}
                ref={handleModalsNodeRef}
            >
                {children}
            </View>
        </ModalsNodeProvider>
    );
}

export default ModalsNode;
