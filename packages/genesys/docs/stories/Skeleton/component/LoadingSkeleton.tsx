import { useState } from "react";
import { Row, Skeleton, Col, Switch } from "@peersyst/react-components";

const LoadingSkeleton = () => {
    const [loading, setLoading] = useState(true);

    return (
        <Row justifyContent="space-between" gap={20}>
            <Col gap={20}>
                <Skeleton loading={loading}>
                    <p>I&apos;ve loaded successfully!</p>
                </Skeleton>
                <Skeleton loading={loading}>
                    <div
                        style={{
                            width: "100px",
                            height: "100px",
                            backgroundColor: "lightgray",
                        }}
                    />
                </Skeleton>
            </Col>
            <Row gap={10} alignItems="center">
                <p>Loading: </p>
                <Switch name="switch" value={loading} onChange={setLoading} />
            </Row>
        </Row>
    );
};

export default LoadingSkeleton;
