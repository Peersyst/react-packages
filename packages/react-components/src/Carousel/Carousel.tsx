import { CarouselArrow, CarouselRoot, CarouselWrapper } from "./Carousel.styles";
import { CarouselProps } from "./Carousel.types";
import { Children, cloneElement, forwardRef, useEffect, useMemo, useRef, useState } from "react";
import { cx, setRef } from "@peersyst/react-utils";
import { useForkRef } from "@peersyst/react-hooks";
import { ChevronLeftIcon, ChevronRightIcon } from "../assets/icons";

const Carousel = forwardRef(
    (
        {
            gap = 20,
            autoplay = false,
            autoplayInterval: autoplayIntervalProp = 3000,
            renderArrows = true,
            rightArrow = <ChevronRightIcon />,
            leftArrow = <ChevronLeftIcon />,
            className,
            style,
            children,
        }: CarouselProps,
        ref,
    ): JSX.Element => {
        const [index, setIndex] = useState(0);
        const [canScrollLeft, setCanScrollLeft] = useState(false);
        const [canScrollRight, setCanScrollRight] = useState(false);
        const [scrollX, setScrollX] = useState(0);
        const carouselRef = useRef<HTMLElement>();
        const handleCarouselRef = useForkRef(carouselRef, ref);
        const indexChildRef = useRef<HTMLElement | null>();
        const autoplayInterval = useRef<NodeJS.Timer>();
        const carouselResizeObserver = useMemo(
            () =>
                new ResizeObserver(() => {
                    canScrollRefresh();
                }),
            [scrollX],
        );

        useEffect(() => {
            if (carouselRef.current) {
                carouselRef.current.onwheel = (e) => e.preventDefault();
                carouselRef.current.ontouchmove = (e) => e.preventDefault();
            }
        }, [carouselRef]);

        useEffect(() => {
            const currentCarouselRef = carouselRef.current;
            if (currentCarouselRef) carouselResizeObserver.observe(currentCarouselRef);
            window.addEventListener("resize", canScrollRefresh);
            return () => {
                carouselResizeObserver.disconnect();
                window.removeEventListener("resize", canScrollRefresh);
            };
        }, [scrollX]);

        useEffect(() => {
            if (autoplay)
                autoplayInterval.current = setInterval(
                    () => handleSlide("right"),
                    autoplayIntervalProp,
                );
            return () => {
                if (autoplayInterval.current) clearInterval(autoplayInterval.current);
            };
        }, [autoplay, scrollX]);

        const canScroll = (direction: "left" | "right") => {
            if (!carouselRef.current) return false;
            return direction === "right"
                ? carouselRef.current.clientWidth + scrollX < carouselRef.current.scrollWidth
                : scrollX > 0;
        };

        const canScrollRefresh = () => {
            setCanScrollLeft(canScroll("left"));
            setCanScrollRight(canScroll("right"));
        };

        const handleSlide = (direction: "left" | "right") => {
            if (carouselRef.current && indexChildRef.current) {
                if (carouselRef.current.clientWidth < carouselRef.current.scrollWidth) {
                    if (canScroll(direction)) {
                        setIndex((i) =>
                            i + 1 < Children.count(children)
                                ? direction === "right"
                                    ? i + 1
                                    : i - 1
                                : i,
                        );
                        setScrollX((sx) => {
                            const newSx =
                                sx +
                                (direction === "right"
                                    ? Math.min(
                                          indexChildRef.current!.clientWidth + gap,
                                          carouselRef.current!.scrollWidth -
                                              (carouselRef.current!.clientWidth + sx),
                                      )
                                    : -indexChildRef.current!.clientWidth - gap);
                            carouselRef.current!.scrollTo(newSx, 0);
                            return newSx;
                        });
                    } else {
                        carouselRef.current.scrollTo(0, 0);
                        setScrollX(0);
                        setIndex(0);
                    }
                }
            }
        };
        return (
            <CarouselWrapper className={cx("Carousel", className)} style={style}>
                <CarouselRoot ref={handleCarouselRef} gap={gap} className="CarouselItems">
                    {Children.map(children, (child, childIndex) =>
                        cloneElement(child, {
                            ...child.props,
                            ref: (r: HTMLElement) =>
                                childIndex === index && setRef(indexChildRef, r),
                        }),
                    )}
                </CarouselRoot>
                {renderArrows && (
                    <>
                        {canScrollLeft && (
                            <CarouselArrow
                                className="CarouselArrow CarouselLeftArrow"
                                direction="left"
                                onClick={() => handleSlide("left")}
                                disabled={!canScrollLeft}
                            >
                                {leftArrow}
                            </CarouselArrow>
                        )}
                        {canScrollRight && (
                            <CarouselArrow
                                className="CarouselArrow CarouselRightArrow"
                                direction="right"
                                onClick={() => handleSlide("right")}
                                disabled={!canScrollRight}
                            >
                                {rightArrow}
                            </CarouselArrow>
                        )}
                    </>
                )}
            </CarouselWrapper>
        );
    },
);

Carousel.displayName = "Carousel";

export default Carousel;
