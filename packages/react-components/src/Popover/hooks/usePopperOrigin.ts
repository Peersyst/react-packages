import { PopperOrigin, PopperPosition } from "../Popover.types";
import { RefObject, useEffect, useState } from "react";

const OFFSET = 10;

export function usePopperOrigin(visible: boolean, position: PopperPosition, ref: RefObject<HTMLDivElement>): PopperOrigin {
    const [vertical, setVertical] = useState(0);
    const [horizontal, setHorizontal] = useState(0);

    useEffect(() => {
        const boundingClientRect = ref.current?.getBoundingClientRect();
        if (boundingClientRect) {
            const { x, y, height, width } = boundingClientRect;

            const ySpace = y + height;
            const xSpace = x + width;

            const popperTop = y < OFFSET ? OFFSET - y : 0;
            const popperBottom = ySpace > window.innerHeight + OFFSET ? ySpace - window.innerHeight + OFFSET : 0;
            const popperLeft = x < OFFSET ? OFFSET - x : 0;
            const popperRight = xSpace > window.innerWidth + OFFSET ? xSpace - window.innerWidth + OFFSET : 0;

            setVertical(popperTop - popperBottom);
            setHorizontal(popperLeft - popperRight);
        }
    }, [visible, position]);

    return { vertical, horizontal };
}
