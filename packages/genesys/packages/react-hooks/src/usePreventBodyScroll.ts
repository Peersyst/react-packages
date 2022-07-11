import { useEffect } from "react";

export default function usePreventBodyScroll(prevent: boolean): void {
    useEffect(() => {
        if (prevent) {
            document.documentElement.style.overflow = "hidden";
        } else {
            document.documentElement.style.removeProperty("overflow");
        }
    }, [prevent]);
}
