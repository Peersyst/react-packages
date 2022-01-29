import { useEffect } from "react";

export function usePreventBodyScroll(prevent: boolean): void {
    useEffect(() => {
        if (prevent) document.body.style.overflow = "hidden";
        else document.body.style.removeProperty("overflow");
    }, [prevent]);
}
