import { ComponentType } from "react";
import { ModalContext, ModalContextType } from "./ModalContext";
import { useModalReducer } from "./hooks/useModalReducer";
import {
    CommonModalComponentProps,
    ModalActionType,
    ModalComponentProps,
    ModalProviderProps,
} from "./ModalProvider.types";
import { ModalManager } from "./ModalManager";

export default function ModalProvider({ children }: ModalProviderProps): JSX.Element {
    const [state, dispatch] = useModalReducer();

    const providerValue: ModalContextType = {
        showModal: (Modal, props) =>
            dispatch({
                type: ModalActionType.SHOW_MODAL,
                payload: {
                    Modal: Modal as ComponentType<ModalComponentProps<CommonModalComponentProps>>,
                    props,
                },
            }),
        hideModal: (name) => dispatch({ type: ModalActionType.HIDE_MODAL, payload: name }),
        removeModal: (name) => dispatch({ type: ModalActionType.REMOVE_MODAL, payload: name }),
        isModalActive: (name) => state.some((Modal) => Modal.props.name === name),
        modals: state,
    };

    return (
        <ModalContext.Provider value={providerValue}>
            <ModalManager />
            {children}
        </ModalContext.Provider>
    );
}
