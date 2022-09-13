import { createContext, FC } from "react";
import { GlobalStyles } from "./globalStyles.types";
import { useCreateGlobalStyles } from "./hook";

export const GlobalStylesContext = createContext<GlobalStyles>({} as never);

export const GlobalStylesProvider: FC = ({ children }) => {
    const globalStyles = useCreateGlobalStyles();
    return (
        <GlobalStylesContext.Provider value={globalStyles}>{children}</GlobalStylesContext.Provider>
    );
};

export const GlobalStylesConsumer = GlobalStylesContext.Consumer;