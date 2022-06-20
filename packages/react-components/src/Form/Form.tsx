import { useRef, useState } from "react";
import { FormProvider } from "./FormContext";
import { useFormSubmit } from "./hooks";
import { FieldNotification, FieldState, FormProps } from "./Form.types";

const Form = ({ children, onSubmit, onInvalid }: FormProps): JSX.Element => {
    const [valid, setValid] = useState(true);
    const data = useRef<Record<string, FieldState>>({});
    const handleNotification = ({ name, removed, ...state }: FieldNotification): void => {
        if (removed) {
            delete data.current[name];
        } else data.current[name] = state;

        if ((valid && !state.valid) || (!valid && state.valid)) {
            setValid(Object.values(data.current).every((v) => v.valid === true));
        }
    };
    const { submitted } = useFormSubmit(data.current, onSubmit, onInvalid);

    return (
        <FormProvider
            value={{
                notifyForm: handleNotification,
                valid,
                submitted,
            }}
        >
            {children}
        </FormProvider>
    );
};

export default Form;
