import { findNodeHandle, View } from "react-native";
import { Children, forwardRef, ReactNode, useRef } from "react";
import { ModalsNodeProvider } from "./ModalsNodeContext";

export interface ModalsNodePortalProps {
    children?: ReactNode;
}

export interface ModalsNodeProps {
    children: ReactNode;
}

export const ModalsNodePortal = forwardRef<View, ModalsNodePortalProps>(function ModalsNodePortal(
    { children },
    ref,
): JSX.Element {
    const sortedChildren = Children.toArray(children).reverse();

    return (
        <View style={{ position: "absolute", width: "100%", height: "100%" }} ref={ref}>
            {sortedChildren}
        </View>
    );
});

export function ModalsNode({ children }: ModalsNodeProps): JSX.Element {
    const modalsNodeRef = useRef<number | null>();

    const handleModalsNodeRef = (ref: View) => {
        // Find native component
        modalsNodeRef.current = findNodeHandle(ref);
    };

    return (
        <ModalsNodeProvider value={modalsNodeRef}>
            <ModalsNodePortal ref={handleModalsNodeRef} />
            {children}
        </ModalsNodeProvider>
    );
}

export default ModalsNode;
