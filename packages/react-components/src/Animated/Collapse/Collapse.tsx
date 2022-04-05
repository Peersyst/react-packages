import { forwardRef, useRef } from "react";
import Animated from "../Animated";
import { CollapseProps } from "./Collapse.types";
import { useForkRef } from "@peersyst/react-hooks";
import { CollapseRoot, CollapseWrapper, CollapseWrapperInner } from "./Collapse.styles";

const Collapse = forwardRef(
    (
        {
            in: inProp,
            orientation = "vertical",
            collapsedSize: collapsedSizeProp = "0px",
            onEnter,
            onEntering,
            onEntered,
            onExit,
            onExiting,
            onExited,
            children,
            duration = 300,
            ...animatedProps
        }: CollapseProps,
        ref,
    ) => {
        const collapsedSize =
            typeof collapsedSizeProp === "number" ? `${collapsedSizeProp}px` : collapsedSizeProp;
        const isHorizontal = orientation === "horizontal";
        const size = isHorizontal ? "width" : "height";

        const wrapperRef = useRef<HTMLDivElement>(null);
        const nodeRef = useRef<HTMLDivElement>(null);
        const handleRef = useForkRef(ref, nodeRef);

        const getWrapperSize = () =>
            wrapperRef.current
                ? wrapperRef.current[isHorizontal ? "clientWidth" : "clientHeight"]
                : 0;

        const handleEnter = (node: HTMLElement, isAppearing: boolean) => {
            if (wrapperRef.current && isHorizontal) {
                // Set absolute position to get the size of collapsed content
                wrapperRef.current.style.position = "absolute";
            }
            node.style[size] = collapsedSize;

            if (onEnter) {
                onEnter(node, isAppearing);
            }
        };

        const handleEntering = (node: HTMLElement, isAppearing: boolean) => {
            const wrapperSize = getWrapperSize();

            if (wrapperRef.current && isHorizontal) {
                // After the size is read reset the position back to default
                wrapperRef.current.style.position = "";
            }

            node.style[size] = `${wrapperSize}px`;

            if (onEntering) {
                onEntering(node, isAppearing);
            }
        };

        const handleEntered = (node: HTMLElement, isAppearing: boolean) => {
            //node.style[size] = "auto";

            if (onEntered) {
                onEntered(node, isAppearing);
            }
        };

        const handleExit = (node: HTMLElement) => {
            node.style[size] = `${getWrapperSize()}px`;

            if (onExit) {
                onExit(node);
            }
        };

        const handleExited = onExited;

        const handleExiting = (node: HTMLElement) => {
            node.style[size] = collapsedSize;

            if (onExiting) {
                onExiting(node);
            }
        };

        return (
            <Animated
                in={inProp}
                animation={{
                    entered: {
                        overflow: "visible",
                    },
                    exited:
                        !inProp && collapsedSize === "0px"
                            ? {
                                  visibility: "hidden",
                              }
                            : {},
                }}
                animatedProperties={isHorizontal ? "width" : "height"}
                duration={duration}
                onEnter={handleEnter}
                onEntering={handleEntering}
                onEntered={handleEntered}
                onExit={handleExit}
                onExiting={handleExiting}
                onExited={handleExited}
                {...animatedProps}
                ref={handleRef}
            >
                <CollapseRoot
                    style={{
                        [isHorizontal ? "minWidth" : "minHeight"]: collapsedSize,
                    }}
                    orientation={orientation}
                >
                    <CollapseWrapper orientation={orientation} ref={wrapperRef}>
                        <CollapseWrapperInner orientation={orientation}>
                            {children}
                        </CollapseWrapperInner>
                    </CollapseWrapper>
                </CollapseRoot>
            </Animated>
        );
    },
);
Collapse.displayName = "Collapse";

export default Collapse;
