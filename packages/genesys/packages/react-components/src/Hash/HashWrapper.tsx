import { HashWrapperProps } from "./Hash.types";
import { forwardRef, RefObject } from "react";
import useHashOnClickHandler from "./hook/useHashClickHandler";

const HashWrapper = forwardRef<HTMLAnchorElement | HTMLSpanElement, HashWrapperProps>(
    function HashWrapper({ children, url, action, ...params }: HashWrapperProps, ref): JSX.Element {
        //Hooks
        const handleClick = useHashOnClickHandler({ ...params, action });

        //Variables
        const anchorWrapper = url && action === "link";

        return anchorWrapper ? (
            <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="HashWrapper"
                ref={ref as RefObject<HTMLAnchorElement>}
            >
                {children}
            </a>
        ) : (
            <span
                className="HashWrapper"
                ref={ref as RefObject<HTMLSpanElement>}
                onClick={handleClick}
            >
                {children}
            </span>
        );
    },
);

export default HashWrapper;
