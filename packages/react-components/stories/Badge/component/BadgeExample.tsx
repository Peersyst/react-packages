import { useState } from "react";
import { Badge, Row, Switch } from "../../../src";

// eslint-disable-next-line react/display-name
export default function (): JSX.Element {
    const [visible, setVisible] = useState(true);

    return (
        <Row justifyContent="center" alignItems="center" gap={20} wrap wrapGap={20}>
            <Badge content={2} invisible={!visible} overlap="rectangular">
                <div
                    style={{
                        width: "80px",
                        height: "80px",
                        backgroundColor: "blue",
                    }}
                />
            </Badge>
            <Switch value={visible} onChange={setVisible} />
        </Row>
    );
}
