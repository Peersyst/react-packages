import { createContext, MutableRefObject, useContext } from "react";

export interface ModalManagerContextType {
    modalManagerRef: MutableRefObject<number | null | undefined>;
}

export const ModalsNodeContext = createContext<MutableRefObject<number | null | undefined>>(
    undefined as any,
);

export const ModalsNodeProvider = ModalsNodeContext.Provider;
export const ModalsNodeConsumer = ModalsNodeContext.Consumer;

export const useModalsNoderRef = () => useContext(ModalsNodeContext);
