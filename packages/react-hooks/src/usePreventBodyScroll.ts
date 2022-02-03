import { useEffect } from "react";

export default function usePreventBodyScroll(prevent: boolean): void {
    useEffect(() => {
        if (prevent) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.removeProperty("overflow");
            document.documentElement.style.removeProperty("overflow");
        }
    }, [prevent]);
}
