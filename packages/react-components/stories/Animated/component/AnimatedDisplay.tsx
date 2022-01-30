import { Animated, Col, Row, Button } from "../../../src";
import { useState } from "react";

export function AnimatedDisplay({ children, Animation, ...rest }: any): JSX.Element {
    const [visible, setVisible] = useState<boolean>(true);
    const [mounted, setMounted] = useState<boolean>(true);
    const toggleVisible = () => {
        setMounted(false);
        setVisible(true);
        setTimeout(() => setMounted(true), 0.1);
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const AnimatedComponent = Animation ? Animated[Animation] : Animated;

    return (
        <Col justifyContent="center" alignItems="center" gap={20} style={{ width: "100%" }}>
            <Row style={{ height: "100px" }}>
                {mounted && (
                    <AnimatedComponent in={visible} {...rest}>
                        {children}
                    </AnimatedComponent>
                )}
            </Row>
            <Row gap={10} style={{ width: "100%" }}>
                <Button onClick={() => toggleVisible()} style={{ width: "100%" }}>
                    Appear
                </Button>
                <Button onClick={() => setVisible(true)} style={{ width: "100%" }}>
                    Enter
                </Button>
                <Button onClick={() => setVisible(false)} style={{ width: "100%" }}>
                    Exit
                </Button>
            </Row>
        </Col>
    );
}
