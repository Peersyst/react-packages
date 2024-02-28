import { AnyObject } from "@swisstype/essential";
import { Stylesheet } from "../../types";
import { createContext } from "react";

export type StylesheetContextType = Record<string, Stylesheet<AnyObject>>;

/**
 * Context used to provide the stylesheets of the styled components
 */
const StylesheetContext = createContext<StylesheetContextType>({});

export default StylesheetContext;
