import { DrawerPosition } from "../Drawer.types";
import { SlideDirection } from "../../Animated";

export function getAnimationDirection(position: DrawerPosition): SlideDirection {
    if (position === "left") return "right";
    else if (position === "right") return "left";
    else if (position === "bottom") return "up";
    else return "down";
}
