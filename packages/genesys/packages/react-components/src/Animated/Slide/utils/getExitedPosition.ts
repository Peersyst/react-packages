import { SlideDirection } from "../Slide.types";

export function getExitedPosition(direction: SlideDirection): string {
    if (direction === "left") return "translateX(100vw)";
    else if (direction === "up") return "translateY(100vh)";
    else if (direction === "right") return "translateX(-100vw)";
    else return "translateY(-100vh)";
}
