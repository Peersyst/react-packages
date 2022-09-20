import { ModalContext, ModalContextType } from "./ModalContext";
import { useModalReducer } from "./hooks/useModalReducer";
import { ModalActionType, ModalProviderProps, ModalWithId } from "./ModalProvider.types";

export default function ModalProvider({ children }: ModalProviderProps): JSX.Element {
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

    return <ModalContext.Provider value={providerValue}>{children}</ModalContext.Provider>;
}
