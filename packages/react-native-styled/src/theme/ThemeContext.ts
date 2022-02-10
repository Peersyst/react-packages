import { createContext } from "react";
import { ThemeContextType } from "./Theme.types";

const ThemeContext = createContext<ThemeContextType>({ theme: {} as any });

export default ThemeContext;
