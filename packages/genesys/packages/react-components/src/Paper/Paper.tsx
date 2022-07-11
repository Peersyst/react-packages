import { forwardRef, HTMLAttributes, Ref } from "react";
import { PaperRoot } from "./Paper.styles";
import { PaperProps } from "./Paper.types";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const Paper = forwardRef((props: PaperProps & HTMLAttributes<HTMLDivElement>, ref) => {
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

Paper.displayName = "Paper";

export default Paper;
