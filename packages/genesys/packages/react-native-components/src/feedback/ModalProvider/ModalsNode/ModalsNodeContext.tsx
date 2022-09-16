import { createContext, Dispatch, MutableRefObject, SetStateAction, useContext } from "react";

export interface ModalManagerContextType {
    modalsNodeRef: MutableRefObject<number | null | undefined>;
    count: number;
    setCount: Dispatch<SetStateAction<number>>;
}

export const ModalsNodeContext = createContext<ModalManagerContextType>(undefined as any);

export const ModalsNodeProvider = ModalsNodeContext.Provider;
export const ModalsNodeConsumer = ModalsNodeContext.Consumer;

export const useModalsNodeContext = () => useContext(ModalsNodeContext);
