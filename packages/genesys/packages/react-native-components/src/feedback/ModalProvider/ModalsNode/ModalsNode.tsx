import { findNodeHandle, View } from "react-native";
import { ReactNode, useMemo, useRef, useState } from "react";
import { ModalManagerContextType, ModalsNodeProvider } from "./ModalsNodeContext";

export interface ModalsNodeProps {
    children: ReactNode;
}

export function ModalsNode({ children }: ModalsNodeProps): JSX.Element {
    const [modalsCount, setModalsCount] = useState(0);

    const modalsNodeRef = useRef<number | null>();

    const handleModalsNodeRef = (ref: View) => {
        // Find native component
        modalsNodeRef.current = findNodeHandle(ref);
    };

    const modalsNodeContext: ModalManagerContextType = useMemo(
        () => ({
            modalsNodeRef,
            count: modalsCount,
            setCount: setModalsCount,
        }),
        [modalsCount, setModalsCount],
    );

    return (
        <ModalsNodeProvider value={modalsNodeContext}>
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
