import { ModalContext, ModalContextType } from "./ModalContext";
import { useModalReducer } from "./hooks/useModalReducer";
import { ModalActionType, ModalProviderProps, ModalWithId } from "./ModalProvider.types";
import { ModalManager } from "./ModalManager";
import { Fragment } from "react";

export default function ModalProvider({
    children: { ModalManager: modalRenderer, children, Wrapper = Fragment },
}: ModalProviderProps): JSX.Element {
    const [state, dispatch] = useModalReducer();

    const providerValue: ModalContextType = {
        showModal: (Modal, props) =>
            dispatch({
                type: ModalActionType.SHOW_MODAL,
                payload: {
                    Modal: Modal as ModalWithId,
                    props: props || {},
                },
            }),
        hideModal: (modal) => dispatch({ type: ModalActionType.HIDE_MODAL, payload: modal }),
        removeModal: (id) => dispatch({ type: ModalActionType.REMOVE_MODAL, payload: id }),
        isModalActive: (modal) =>
            state.some(({ Modal }) =>
                typeof modal === "string" ? Modal.id === modal : Modal.id === modal.id,
            ),
        modals: state,
    };

    return (
        <ModalContext.Provider value={providerValue}>
            <Wrapper>
                <ModalManager>{modalRenderer}</ModalManager>
                {children}
            </Wrapper>
        </ModalContext.Provider>
    );
}
