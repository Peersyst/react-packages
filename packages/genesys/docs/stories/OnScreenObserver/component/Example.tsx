import { Animated, OnScreenObserver, Typography } from "@peersyst/react-components";

export default function Example(): JSX.Element {
    return (
        <div
            style={{
                height: "500px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <Typography variant="h6">Scroll to animate</Typography>
            <OnScreenObserver>
                {(onScreen) => (
                    <Animated.FadingSlide in={onScreen} direction="right" duration={1000}>
                        <div style={{ height: "100px", width: "100%", backgroundColor: "red" }} />
                    </Animated.FadingSlide>
                )}
            </OnScreenObserver>
        </div>
    );
}
