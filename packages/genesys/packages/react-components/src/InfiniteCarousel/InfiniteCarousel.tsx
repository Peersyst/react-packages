import * as React from "react";
import { Children, CSSProperties, ReactNode } from "react";
import { cx } from "@peersyst/react-utils";
import {
    InfiniteCarouselBody,
    InfiniteCarouselDirection,
    InfiniteCarouselRoot,
} from "./InfiniteCarousel.styles";

export interface InfiniteCarouselProps {
    wrapperClassName?: string;
    wrapperStyle?: CSSProperties;
    className?: string;
    style?: CSSProperties;
    speed?: number; // speed in px/s
    gap?: number; //column gap in px
    minElems?: number;
    children: ReactNode;
    direction?: InfiniteCarouselDirection;
}

interface InfiniteCarouselState {
    initialized: boolean;
    refresh: boolean;
}

export default class InfiniteCarousel extends React.Component<
    InfiniteCarouselProps,
    InfiniteCarouselState
> {
    state: InfiniteCarouselState = {
        initialized: true,
        refresh: false,
    };

    children: ReactNode[] = [];
    sliderContainerRef: HTMLDivElement | null = null;
    childRefs: (HTMLDivElement | null)[] = [];

    componentDidMount(): void {
        const { children, minElems } = this.props;
        if (this.children.length < (minElems || 20) && Children.count(children) > 0) {
            let j = 0;
            while (this.children.length < (minElems || 20)) {
                this.children = this.children.concat(
                    Children.map(children, (e, i) => {
                        return j === 0 ? (
                            <div
                                key={i.toString() + j.toString()}
                                ref={(ref) => this.childRefs.push(ref)}
                            >
                                {e}
                            </div>
                        ) : (
                            <div key={i.toString() + j.toString()}>{e}</div>
                        );
                    }),
                );
                j++;
            }
            this.setState({ initialized: true });
        }
    }

    refill(): void {
        const { refresh } = this.state;
        const elem = this.children.shift();
        this.children.push(elem);
        this.setState({ refresh: !refresh });
    }

    render(): JSX.Element {
        const { className, style, wrapperStyle, wrapperClassName, speed, gap, direction } =
            this.props;

        return (
            <InfiniteCarouselRoot
                className={cx("InfiniteCarousel", wrapperClassName)}
                style={wrapperStyle}
                ref={(ref) => (this.sliderContainerRef = ref)}
            >
                {this.state.initialized && (
                    <InnerCarousel
                        elements={this.children}
                        refresh={this.state.refresh}
                        className={cx(className)}
                        style={style}
                        speed={speed}
                        containerRef={this.sliderContainerRef}
                        childRefs={this.childRefs}
                        gap={gap}
                        callback={() => this.refill()}
                        direction={direction}
                    />
                )}
            </InfiniteCarouselRoot>
        );
    }
}

interface InnerProps {
    elements: ReactNode[];
    containerRef: HTMLDivElement | null;
    refresh: boolean;
    className?: string;
    style?: CSSProperties;
    speed?: number;
    childRefs: (HTMLDivElement | null)[];
    gap?: number;
    callback: () => void;
    direction?: InfiniteCarouselDirection;
}

interface InnerState {
    scrollPos: number;
}

class InnerCarousel extends React.Component<InnerProps, InnerState> {
    state: InnerState = {
        scrollPos: 0,
    };

    transitionSeconds = 0;
    slideStart = 0;
    slideInterval = setInterval(() => this.scroll(), 0);
    remaining = 0;
    sliderRef: HTMLDivElement | null = null;
    nElem = -1;
    pausePos = 0;

    componentDidMount(): void {
        this.setSlideMovement();
        window.addEventListener("resize", () => this.handleResize());
    }

    componentWillUnmount(): void {
        window.removeEventListener("resize", () => this.handleResize());
        clearInterval(this.slideInterval);
    }

    getElementSize(childRef: HTMLDivElement | null): number {
        if (childRef) {
            const { direction } = this.props;
            if (direction === "ltr" || direction === "rtl")
                return childRef.getBoundingClientRect().width;
            else return childRef.getBoundingClientRect().height;
        }
        return 0;
    }

    getScrollTransform(scrollPos: number): string {
        const { direction } = this.props;
        if (direction === "ltr") return `translateX(${-scrollPos.toString()}px)`;
        else if (direction === "rtl") return `translateX(${scrollPos.toString()}px)`;
        else if (direction === "ttb") return `translateY(${scrollPos.toString()}px)`;
        else return `translateY(${-scrollPos.toString()}px)`;
    }

    //Calculate how many px the slider has to move and on how much time
    setSlideMovement(): void {
        const { childRefs, containerRef, speed } = this.props;
        if (this.sliderRef && containerRef) {
            const { scrollPos } = this.state;

            const childRef = childRefs[this.nElem % childRefs.length];
            const w = this.getElementSize(childRef) + (this.props.gap || 20);

            this.transitionSeconds = w / (speed || 50);

            this.sliderRef.style.transform = this.getScrollTransform(scrollPos);
            this.slideStart = Date.now();
            this.remaining = this.transitionSeconds * 1000;
            this.slideInterval = setInterval(() => this.scroll(), this.remaining);
            this.sliderRef.style.transition = `all ${(this.remaining / 1000).toString()}s linear`;
            this.pausePos = 0;
            this.setState({ scrollPos: w });
        }
    }

    getResetPos(): string {
        const { direction } = this.props;
        if (direction === "ltr" || direction === "rtl") return "translateX(0)";
        else return "translateY(0)";
    }

    getPausePos(pausePos: number): string {
        const { direction } = this.props;
        if (direction === "ltr") return `translateX(${pausePos.toString()}px)`;
        else if (direction === "rtl") return `translateX(${-pausePos.toString()}px)`;
        else if (direction === "ttb") return `translateY(${-pausePos.toString()}px)`;
        else return `translateY(${pausePos.toString()}px)`;
    }

    handleResize() {
        // TO DO: Maintain position instead of reseting it?
        if (this.sliderRef) {
            this.sliderRef.style.transform = this.getResetPos();
            this.sliderRef.style.transition = "";
        }
        clearInterval(this.slideInterval);
        this.setSlideMovement();
    }

    //Reset slider postion, remove first elem which has already transitioned and re calculate the movement
    scroll(): void {
        if (this.sliderRef) {
            this.sliderRef.style.transform = this.getResetPos();
            this.sliderRef.style.transition = "";
        }
        clearInterval(this.slideInterval);
        this.nElem++;
        this.setSlideMovement();
        this.props.callback();
    }

    render(): JSX.Element {
        const { elements, refresh, className, style, gap, speed, direction = "ltr" } = this.props;
        const { scrollPos } = this.state;

        return (
            <>
                {(refresh || !refresh) && (
                    <InfiniteCarouselBody
                        ref={(ref) => (this.sliderRef = ref)}
                        className={cx("InfiniteCarouselBody", className)}
                        direction={direction}
                        style={{
                            columnGap: (gap || 20).toString() + "px",
                            rowGap: (gap || 20).toString() + "px",
                            transform: this.getScrollTransform(scrollPos),
                            transition: `all ${(this.remaining / 1000).toString()}s linear`,
                            ...style,
                        }}
                        onMouseEnter={() => {
                            if (this.sliderRef) {
                                this.remaining -= Date.now() - this.slideStart;
                                this.pausePos -=
                                    ((Date.now() - this.slideStart) / 1000) * (speed || 50);
                                this.sliderRef.style.transform = this.getPausePos(this.pausePos);
                                this.sliderRef.style.transition = "";
                                clearInterval(this.slideInterval);
                            }
                        }}
                        onMouseLeave={() => {
                            if (this.sliderRef) {
                                this.sliderRef.style.transform = this.getScrollTransform(scrollPos);
                                this.sliderRef.style.transition = `all ${(
                                    this.remaining / 1000
                                ).toString()}s linear`;
                                this.slideInterval = setInterval(
                                    () => this.scroll(),
                                    this.remaining,
                                );
                                this.slideStart = Date.now();
                            }
                        }}
                    >
                        {elements}
                    </InfiniteCarouselBody>
                )}
            </>
        );
    }
}
