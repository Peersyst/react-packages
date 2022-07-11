import { forwardRef, useCallback, useEffect, useRef } from "react";
import { SlideProps } from "./Slide.types";
import Animated from "../Animated";
import { setTranslateValue } from "./utils/setTranslateValue";
import { debounce } from "@peersyst/react-utils";
import { getDuration } from "../helpers";
import { getExitedPosition } from "./utils/getExitedPosition";
import { useForkRef } from "@peersyst/react-hooks";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const Slide = forwardRef((props: SlideProps, ref) => {
    const {
        direction,
        container,
        onEnter,
        onEntering,
        onExited,
        onExit,
        in: inProp,
        duration = 500,
        ...animatedProps
    } = useMergeDefaultProps("AnimatedSlide", props);

    const handleEnter = (node: HTMLElement, isAppearing: boolean) => {
        node.style.transitionDuration = "0ms";
        setTranslateValue(direction, node, container);
        onEnter?.(node, isAppearing);
    };

    const handleEntering = (node: HTMLElement, isAppearing: boolean) => {
        node.style.transitionDuration = getDuration(duration, "entering") + "ms";
        node.style.transform = "none";
        onEntering?.(node, isAppearing);
    };

    const handleExit = (node: HTMLElement) => {
        setTranslateValue(direction, node, container);
        onExit?.(node);
    };

    const handleExited = (node: HTMLElement) => {
        onExited?.(node);
    };

    const childrenRef = useRef<HTMLElement>(null);
    const handleRef = useForkRef(childrenRef, ref);

    const updatePosition = useCallback(() => {
        if (childrenRef.current) {
            setTranslateValue(direction, childrenRef.current, container);
        }
    }, [direction, container]);

    useEffect(() => {
        if (!inProp) {
            updatePosition();
        }
    }, [inProp, updatePosition]);

    useEffect(() => {
        // Skip configuration where the position is screen size invariant.
        if (inProp || direction === "down" || direction === "right") {
            return undefined;
        }

        const handleResize = debounce(() => {
            if (childrenRef.current) {
                setTranslateValue(direction, childrenRef.current, container);
            }
        });

        window.addEventListener("resize", handleResize);
        return () => {
            handleResize.clear();
            window.removeEventListener("resize", handleResize);
        };
    }, [direction, inProp, container]);

    return (
        <Animated
            ref={handleRef}
            animation={{
                exited: {
                    transform: getExitedPosition(direction),
                },
            }}
            animatedProperties="transform"
            in={inProp}
            duration={duration}
            onEnter={handleEnter}
            onEntering={handleEntering}
            onExit={handleExit}
            onExited={handleExited}
            {...animatedProps}
            unmountOnExit
            mountOnEnter
        />
    );
});

Slide.displayName = "Slide";

export default Slide;
