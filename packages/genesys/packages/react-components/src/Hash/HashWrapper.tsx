import { HashWrapperProps } from "./Hash.types";
import { forwardRef, RefObject } from "react";
import useHashOnClickHandler from "./hook/useHashClickHandler";
import { HashLink } from "./Hash.styles";

const HashWrapper = forwardRef<HTMLAnchorElement | HTMLSpanElement, HashWrapperProps>(
    function HashWrapper({ children, url, action, ...params }: HashWrapperProps, ref): JSX.Element {
        //Hooks
        const handleClick = useHashOnClickHandler({ ...params, action });

        //Variables
        const anchorWrapper = url && action === "link";

        return anchorWrapper ? (
            <HashLink
                href={url}
                target="_blank"
                rel="noreferrer"
                className="HashWrapper"
                ref={ref as RefObject<HTMLAnchorElement>}
            >
                {children}
            </HashLink>
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
