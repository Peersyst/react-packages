import { ReactElement } from "react";
import { ClickAwayListener } from "@peersyst/react-components";

declare type MouseEvents = "click" | "mousedown" | "mouseup";
declare type TouchEvents = "touchstart" | "touchend";
declare type Events = FocusEvent | MouseEvent | TouchEvent;

export interface ClickAwayListenerProps {
    /**
     * Fires when a user clicks outside the click away component
     */
    onClickAway: (event: Events) => void;
    /**
     * The mouse event type that gets fired on ClickAway
     */
    mouseEvent?: MouseEvents;
    /**
     * The touch event type that gets fired on ClickAway
     */
    touchEvent?: TouchEvents;
    /**
     * ClickAwayListener children
     */
    children: ReactElement;
}

export default function ClickAwayListenerWithProps(props: ClickAwayListenerProps): JSX.Element {
    return <ClickAwayListener {...props} />;
}
