import { forwardRef, Ref } from "react";
import { PaperRoot } from "./Paper.styles";
import { PaperProps } from "./Paper.types";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const Paper = forwardRef(function Paper(props: PaperProps, ref) {
    const {
        elevation = 1,
        square = false,
        className,
        style,
        children,
        ...rest
    } = useMergeDefaultProps("Paper", props);

    return (
        <PaperRoot
            elevation={elevation}
            square={square}
            className={className}
            style={style}
            ref={ref as Ref<HTMLDivElement>}
            {...rest}
        >
            {children}
        </PaperRoot>
    );
});

export default Paper;
