import { BadgeProps } from "./Badge.types";
import { Children } from "react";
import { BadgeItem, BadgeRoot } from "./Badge.styles";
import { Animated, TransitionStyles } from "../Animated";

const Badge = ({
    position,
    content,
    children,
    max = 99,
    invisible = false,
    overlap = "rectangular",
    showZero = false,
    style,
    ...rest
}: BadgeProps): JSX.Element => {
    const translate = `translate(${position?.horizontal === "left" ? "-50%" : "50%"}, ${
        position?.vertical === "bottom" ? "50%" : "-50%"
    })`;
    const transformOrigin = `${position?.horizontal === "left" ? "0%" : "100%"} ${
        position?.vertical === "bottom" ? "100%" : "0%"
    }`;
    const transform: TransitionStyles = {
        entering: {
            transform: `scale(1) ${translate}`,
        },
        entered: {
            transform: `scale(1) ${translate}`,
        },
        exiting: {
            transform: `scale(0) ${translate}`,
        },
        exited: {
            transform: `scale(0) ${translate}`,
        },
    };

    const hasContent = !!content || (showZero && content === 0);

    return (
        <BadgeRoot>
            {Children.only(children)}
            <Animated
                appear={false}
                animation={transform}
                animatedProperties="transform"
                in={!invisible && hasContent}
                duration={200}
                style={{ transformOrigin }}
            >
                <BadgeItem
                    position={{
                        vertical: position?.vertical || "top",
                        horizontal: position?.horizontal || "right",
                    }}
                    overlap={overlap}
                    hasContent={hasContent}
                    style={style}
                    {...rest}
                >
                    {typeof content === "number" && content > max ? max + "+" : content}
                </BadgeItem>
            </Animated>
        </BadgeRoot>
    );
};

export default Badge;
