import { SlideDirection } from "../Slide.types";
import { getTranslateValue } from "./getTranslateValue";

export function setTranslateValue(direction: SlideDirection, node: HTMLElement, containerProp?: HTMLElement | null) {
    const transform = getTranslateValue(direction, node, containerProp);
    if (transform) node.style.transform = transform;
}
