import React from "react";
import { FormContextInterface } from "./Form.types";

export const FormContext = React.createContext<Partial<FormContextInterface>>({});
export const FormProvider = FormContext.Provider;
export const FormConsumer = FormContext.Consumer;
