import { createContext, FC, PropsWithChildren } from "react";
import { GlobalStyles } from "./globalStyles.types";
import { useCreateGlobalStyles } from "./hook";

/**
 * @deprecated
 */
export const GlobalStylesContext = createContext<GlobalStyles>({} as never);

/**
 * @deprecated
 */
export const GlobalStylesProvider: FC<PropsWithChildren> = ({ children }) => {
    const globalStyles = useCreateGlobalStyles();
    return (
        <GlobalStylesContext.Provider value={globalStyles}>{children}</GlobalStylesContext.Provider>
    );
};

/**
 * @deprecated
 */
export const GlobalStylesConsumer = GlobalStylesContext.Consumer;
