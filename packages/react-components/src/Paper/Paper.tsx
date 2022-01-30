import { forwardRef, HTMLAttributes, Ref } from "react";
import { PaperRoot } from "./Paper.styles";
import { PaperProps } from "./Paper.types";

const Paper = forwardRef(
    (
        {
            elevation = 1,
            square = false,
            className,
            style,
            children,
            ...rest
        }: PaperProps & HTMLAttributes<HTMLDivElement>,
        ref: Ref<HTMLDivElement>,
    ) => (
        <PaperRoot
            elevation={elevation}
            square={square}
            className={className}
            style={style}
            ref={ref}
            {...rest}
        >
            {children}
        </PaperRoot>
    ),
);

Paper.displayName = "Paper";

export default Paper;
