import {
    cloneElement,
    PropsWithChildren,
    ReactElement,
    ReactNode,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { PopoverComponent, PopoverProps, PopperProps } from "./Popover.types";
import {
    PopoverContent,
    PopoverPaper,
    PopoverPopper,
    PopoverRoot,
    PopoverSnitch,
    PopperArrow,
} from "./Popover.styles";
import { findSlot, cx, debounce } from "@peersyst/react-utils";
import { ClickAwayListener } from "../ClickAwayListener";
import { useControlled } from "@peersyst/react-hooks";
import { Animated } from "../Animated";
import { createPopper } from "@popperjs/core";
import { createPortal } from "react-dom";
import { PaperProps } from "../Paper";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const Popover = ((props: PopoverProps): JSX.Element => {
    const {
        visible: visibleProp,
        onHide,
        onShow,
        showOn = "hover",
        position = "bottom",
        arrow,
        skidding = 0,
        animation: { AnimatedComponent, props: AnimatedComponentProps } = {
            AnimatedComponent: Animated.Fade,
            props: { duration: 200 },
        },
        container: containerProp,
        disablePortal = false,
        className,
        style,
        children,
    } = useMergeDefaultProps("Popover", props);

    const [visible, setVisible] = useControlled(false, visibleProp, visibleProp ? onHide : onShow);
    const [fullyVisible, setFullyVisible] = useState(visible);

    const popper = findSlot(children, Popper);
    const content = findSlot(children, Content);

    const [popperRef, setPopperRef] = useState<HTMLDivElement | null>(null);
    const [contentRef, setContentRef] = useState<HTMLDivElement | null>(null);
    const handlePopperRef = useRef(debounce(setPopperRef, 350)).current;
    const handleContentRef = useRef(debounce(setContentRef, 350)).current;

    const popperInstance = useMemo(() => {
        if (popperRef && contentRef)
            return createPopper(contentRef, popperRef, {
                placement: position,
                modifiers: [
                    {
                        name: "offset",
                        options: {
                            offset: [skidding, arrow ? 10 : 0],
                        },
                    },
                ],
            });
    }, [popperRef, contentRef]);

    useEffect(() => {
        if (popperInstance) {
            if (visible) {
                // Enable the event listeners
                popperInstance.setOptions((options) => ({
                    ...options,
                    modifiers: [
                        ...(options.modifiers || []),
                        { name: "eventListeners", enabled: true },
                    ],
                }));
                // Update position
                popperInstance.update();
            } else {
                // Disable the event listeners
                popperInstance.setOptions((options) => ({
                    ...options,
                    modifiers: [
                        ...(options.modifiers || []),
                        { name: "eventListeners", enabled: false },
                    ],
                }));
            }
        }
    }, [visible]);

    useEffect(() => {
        if (visibleProp) setFullyVisible(true);
    }, [visibleProp]);

    const handleClick = () => {
        if (showOn === "click") {
            setVisible(true);
            setFullyVisible(true);
        }
    };

    const handleMouseOver = () => {
        if (showOn === "hover") {
            setVisible(true);
            setFullyVisible(true);
        }
    };

    const handleMouseLeave = () => {
        if (showOn === "hover") {
            setVisible(false);
        }
    };

    const { style: { arrow: arrowStyle, ...popperStyle } = {}, ...popperProps } =
        popper.props as PopperProps;

    const popperElement = (
        <PopoverPopper
            style={{
                display: !fullyVisible ? "none" : undefined,
            }}
            ref={handlePopperRef}
            onMouseEnter={() => visible && handleMouseOver()}
            onMouseLeave={() => visible && handleMouseLeave()}
        >
            <AnimatedComponent
                {...AnimatedComponentProps}
                in={visible}
                onExited={() => setFullyVisible(false)}
            >
                {cloneElement(
                    popper as ReactElement<PaperProps>,
                    {
                        ...popperProps,
                        style: popperStyle,
                        children: (
                            <>
                                {(popper.props as PaperProps).children}
                                {arrow && (
                                    <PopperArrow
                                        className="PopperArrow"
                                        style={arrowStyle}
                                        elevation={(popper.props as PaperProps).elevation}
                                        data-popper-arrow
                                    />
                                )}
                            </>
                        ),
                    } as PropsWithChildren<any>,
                )}
            </AnimatedComponent>
        </PopoverPopper>
    );

    const container = containerProp || document.body;

    return (
        <ClickAwayListener onClickAway={() => showOn === "click" && visible && setVisible(false)}>
            <PopoverRoot className={cx("PopoverRoot", className)} style={style}>
                {disablePortal ? popperElement : createPortal(popperElement, container)}
                <PopoverContent
                    onClick={handleClick}
                    onMouseEnter={handleMouseOver}
                    onMouseLeave={handleMouseLeave}
                    className="PopoverContent"
                >
                    {content}
                    <PopoverSnitch ref={handleContentRef} />
                </PopoverContent>
            </PopoverRoot>
        </ClickAwayListener>
    );
}) as PopoverComponent;

const Popper = ({ elevation = 8, className, ...rest }: PopperProps) => (
    <PopoverPaper elevation={elevation} className={cx("PopoverPopper", className)} {...rest} />
);
const Content = ({ children }: { children: ReactNode }) => <>{children}</>;

Popover.Popper = Popper;
Popover.Content = Content;

export default Popover;
