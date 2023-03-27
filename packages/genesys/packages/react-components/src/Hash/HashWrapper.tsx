import { HashWrapperProps } from "./Hash.types";
import { forwardRef, RefObject, useEffect } from "react";
import useHashOnClickHandler from "./hook/useHashClickHandler";
import clsx from "clsx";

const HashWrapper = forwardRef<HTMLAnchorElement | HTMLDivElement, HashWrapperProps>(
    function HashWrapper(
        { children, url, action, hashToShareData, ...params }: HashWrapperProps,
        ref,
    ): JSX.Element {
        //Hooks
        const handleClick = useHashOnClickHandler({ ...params, action, hashToShareData });

        //Variables
        const anchorWrapper = url && action === "link";

        return anchorWrapper ? (
            <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className={clsx("HashWrapper")}
                ref={ref as RefObject<HTMLAnchorElement>}
            >
                {children}
            </a>
        ) : (
            <div
                className={clsx("HashWrapper")}
                ref={ref as RefObject<HTMLDivElement>}
                onClick={handleClick}
            >
                {children}
            </div>
        );
    },
);

export default HashWrapper;
