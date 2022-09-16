import { createContext, MutableRefObject, useContext } from "react";

export interface ModalManagerContextType {
    modalManagerRef: MutableRefObject<number | null | undefined>;
}

export const ModalManagerContext = createContext<ModalManagerContextType>(undefined as any);

export const ModalManagerProvider = ModalManagerContext.Provider;
export const ModalManagerConsumer = ModalManagerContext.Consumer;

export const useModalManagerRef = () => useContext(ModalManagerContext).modalManagerRef;
