import { MutableRefObject, useEffect, useRef, useState } from "react";

export interface TriggerOptions {
    disableHysteresis?: boolean;
    target?: Window | HTMLElement;
    threshold?: number;
}

export interface UseScrollTriggerOptions extends TriggerOptions {
    getTrigger?: typeof defaultTrigger;
}

function defaultTrigger(store: MutableRefObject<number | undefined>, options: TriggerOptions) {
    const { disableHysteresis = false, threshold = 100, target } = options;
    const previous = store.current;

    if (target) {
        // Get vertical scroll
        store.current = (target as Window).scrollY !== undefined ? (target as Window).scrollY : (target as HTMLElement).scrollTop;
    }

    if (!disableHysteresis && previous !== undefined) {
        if ((store.current ?? 0) < previous) {
            return false;
        }
    }

    return (store.current ?? 0) > threshold;
}

const defaultTarget = window;

export function useScrollTrigger(options: UseScrollTriggerOptions = {}) {
    const { getTrigger = defaultTrigger, target = defaultTarget, ...other } = options;
    const store = useRef<number>();
    const [trigger, setTrigger] = useState(() => getTrigger(store, other));

    useEffect(() => {
        const handleScroll = () => {
            setTrigger(getTrigger(store, { target, ...other }));
        };

        handleScroll(); // Re-evaluate trigger when dependencies change
        target?.addEventListener("scroll", handleScroll);
        return () => {
            target?.removeEventListener("scroll", handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [target, getTrigger, JSON.stringify(other)]);

    return trigger;
}
