import { createContext } from "react";
import { ThemeContextType } from "./Theme.types";

const ThemeContext = createContext<ThemeContextType>({ theme: {} });

export default ThemeContext;
