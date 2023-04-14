import { ReactNode, useContext, useMemo } from "react";
import StylesheetContext, { StylesheetContextType } from "./StylesheetContext";
import { deepmerge } from "@peersyst/react-utils";

export interface StylesheetProviderProps {
    stylesheets: StylesheetContextType;
    children: ReactNode;
}

/**
 * Stylesheets provider that merges its stylesheets with the parent stylesheets at load time
 */
const StylesheetProvider = ({ stylesheets, children }: StylesheetProviderProps): JSX.Element => {
    const higherStylesheets = useContext(StylesheetContext);

    const mergedStylesheets = useMemo(
        () => deepmerge(higherStylesheets, stylesheets),
        [higherStylesheets, stylesheets],
    );

    return (
        <StylesheetContext.Provider value={mergedStylesheets}>
            {children}
        </StylesheetContext.Provider>
    );
};

export default StylesheetProvider;
