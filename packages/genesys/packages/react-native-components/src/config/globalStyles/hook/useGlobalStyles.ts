import { GlobalStyles } from "../globalStyles.types";
import { useContext } from "react";
import { GlobalStylesContext } from "../GlobalStylesContext";

export default function <K extends keyof GlobalStyles>(component: K): NonNullable<GlobalStyles[K]> {
    return (useContext(GlobalStylesContext)[component] || {}) as NonNullable<GlobalStyles[K]>;
}
