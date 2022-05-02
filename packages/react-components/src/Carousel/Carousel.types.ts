import { CSSProperties, ReactElement } from "react";

export interface CarouselProps {
    /**
     * Gap between elements in px
     */
    gap?: number;
    /**
     * Enables Carousel's autoplay
     */
    autoplay?: boolean;
    /**
     * Carousel autoplay interval in ms
     */
    autoplayInterval?: number;
    /**
     * Render arrows
     */
    renderArrows?: boolean;
    /**
     * Left arrow element
     */
    leftArrow?: ReactElement;
    /**
     * Right arrow element
     */
    rightArrow?: ReactElement;
    /**
     * Carousel className
     */
    className?: string;
    /**
     * Carousel style
     */
    style?: CSSProperties;
    /**
     * Carousel items
     */
    children: ReactElement[] | ReactElement;
}

export interface CarouselArrowButtonProps {
    direction: "left" | "right";
}
