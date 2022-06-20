import { ReactNode, useState } from "react";
import {
    Form,
    Button,
    TextField,
    Col,
    TextArea,
    Row,
    Checkbox,
    RadioButton,
    Select,
    Slider,
    Switch,
    Popover,
    SelectItem,
} from "../../../src";

const formatFormResult = (result: Record<string, unknown>): ReactNode => (
    <div style={{ padding: "10px" }}>
        {"{"}
        <br />
        <div style={{ marginLeft: "20px" }}>
            {Object.entries(result).map((v) => (
                <>
                    {v[0] + ": " + v[1]}
                    <br />
                </>
            ))}
        </div>
        {"}"}
    </div>
);

const FormExample = () => {
    const [formResult, setFormResult] = useState<Record<string, unknown>>({});
    const [showPopover, setShowPopover] = useState(false);

    return (
        <Form
            onSubmit={setFormResult}
            onInvalid={() => setFormResult({})}
            style={{ width: "250px" }}
        >
            <Col gap={20} alignItems="center">
                <TextField name="textField" validators={{ required: true }} />
                <TextArea name="textArea" validators={{ required: true }} />
                <Row gap={10} style={{ width: "100%" }} alignItems="center">
                    <Checkbox name="checkbox" required />
                    Check me
                </Row>
                <Row gap={10} style={{ width: "100%" }} alignItems="center">
                    <RadioButton name="radioButton" required />
                    Check me
                </Row>
                <Select name="select" required placeholder="Select a blockchain">
                    <SelectItem value="harmony">Harmony</SelectItem>
                    <SelectItem value="ethereum">Ethereum</SelectItem>
                    <SelectItem value="ripple">Ripple</SelectItem>
                </Select>
                <Slider name="slider" min={0} max={100} />
                <Switch name="switch" required />
                <Popover
                    position="right"
                    showOn="click"
                    visible={showPopover}
                    onShow={() => formResult != {} && setShowPopover(true)}
                    onHide={() => setShowPopover(false)}
                >
                    <Popover.Content>
                        <Button style={{ width: "250px" }} type="submit">
                            Submit
                        </Button>
                    </Popover.Content>
                    <Popover.Popper>{formatFormResult(formResult)}</Popover.Popper>
                </Popover>
            </Col>
        </Form>
    );
};

export default FormExample;
