import { useEffect } from "react";

export default function (cb: () => void): void {
    useEffect(() => {
        cb();
        window.addEventListener("resize", () => cb());
        return () => {
            window.removeEventListener("resize", () => cb());
        };
    }, [cb]);
}
