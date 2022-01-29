import { AppBarContent, AppBarRoot } from "./AppBar.styles";
import { AppBarProps } from "./AppBar.types";
import { useScrollTrigger } from "../hooks";
import { Animated } from "../Animated";
import { cx } from "../utils/cx";

export function AppBar({
    position = "static",
    elevation: elevationProp = 8,
    onScrollElevation,
    onScrollElevationThreshold = 0,
    hideOnScroll = false,
    hideOnScrollThreshold = 100,
    className,
    style,
    children,
}: AppBarProps): JSX.Element {
    const hideTrigger = useScrollTrigger({ threshold: hideOnScrollThreshold });
    const elevationTrigger = useScrollTrigger({
        threshold: onScrollElevationThreshold,
        disableHysteresis: true,
    });

    const elevation = onScrollElevation !== undefined && elevationTrigger ? onScrollElevation : elevationProp;

    return (
        <Animated.Slide direction="down" duration={300} in={!hideOnScroll || !hideTrigger} appear={false}>
            <AppBarRoot position={position} className={cx("AppBar", className)} style={style}>
                <AppBarContent elevation={elevation} className="AppBarContent">
                    {children}
                </AppBarContent>
            </AppBarRoot>
        </Animated.Slide>
    );
}
