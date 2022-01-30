import { SlideDirection } from "../Slide.types";
import ownerWindow from "../../../utils/ownerWindow";

export function getTranslateValue(
    direction: SlideDirection,
    node: HTMLElement,
    resolvedContainer?: HTMLElement | null,
) {
    const rect = node.getBoundingClientRect();
    const containerRect = resolvedContainer && resolvedContainer.getBoundingClientRect();
    const containerWindow = ownerWindow(node);

    const computedStyle = containerWindow.getComputedStyle(node);
    const transform =
        computedStyle.getPropertyValue("-webkit-transform") ||
        computedStyle.getPropertyValue("transform");

    let offsetX = 0;
    let offsetY = 0;

    if (transform && transform !== "none") {
        const transformValues = transform.split("(")[1].split(")")[0].split(",");
        offsetX = parseInt(transformValues[4], 10);
        offsetY = parseInt(transformValues[5], 10);
    }

    if (direction === "left") {
        if (containerRect) {
            return `translateX(${containerRect.right + offsetX - rect.left}px)`;
        }

        return `translateX(${containerWindow.innerWidth + offsetX - rect.left}px)`;
    } else if (direction === "right") {
        if (containerRect) {
            return `translateX(-${rect.right - containerRect.left - offsetX}px)`;
        }

        return `translateX(-${rect.left + rect.width - offsetX}px)`;
    } else if (direction === "up") {
        if (containerRect) {
            return `translateY(${containerRect.bottom + offsetY - rect.top}px)`;
        }
        return `translateY(${containerWindow.innerHeight + offsetY - rect.top}px)`;
    } else {
        if (containerRect) {
            return `translateY(-${rect.top - containerRect.top + rect.height - offsetY}px)`;
        }
        return `translateY(-${rect.top + rect.height - offsetY}px)`;
    }
}
