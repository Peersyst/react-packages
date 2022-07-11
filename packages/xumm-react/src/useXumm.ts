import { XummContext, XummContextType } from "./XummContext";
import { useContext } from "react";

export default function (): XummContextType {
    const xummContext = useContext(XummContext);
    if (!xummContext)
        throw new Error(
            "XummContext is not defined, please place XummProvider at the root of your project",
        );
    return xummContext;
}
