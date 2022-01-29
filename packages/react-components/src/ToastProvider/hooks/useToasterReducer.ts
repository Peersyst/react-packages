import { ShowToastAction, ToasterAction, ToasterActionType, ToasterState } from "../ToastProvider.types";
import { Reducer, useReducer } from "react";

const reducer = (state: ToasterState, action: ToasterAction): ToasterState => {
    switch (action.type) {
        case ToasterActionType.SHOW_TOAST:
            if (state.length) {
                state[0].props = { ...state[0].props, open: false };
            }
            const { message, props } = (action as ShowToastAction).payload;
            return state.length < 2
                ? state.concat({
                      message,
                      props: { ...props, key: new Date().getMilliseconds() },
                  })
                : state;
        case ToasterActionType.HIDE_TOAST:
            return state.map((t, i) => (i === 0 ? { message: t.message, props: { ...t.props, open: false } } : t));
        case ToasterActionType.REMOVE_TOAST:
            return state.slice(1);
    }
};

export function useToasterReducer() {
    return useReducer<Reducer<ToasterState, ToasterAction>>(reducer, []);
}
