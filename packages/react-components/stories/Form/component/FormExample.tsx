import { Fragment, ReactNode, useState } from "react";
import {
    Form,
    Button,
    TextField,
    Col,
    TextArea,
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
            {Object.entries(result).map((v, key) => (
                <Fragment key={key}>
                    {v[0] + ": " + v[1]}
                    <br />
                </Fragment>
            ))}
        </div>
        {"}"}
    </div>
);

const FormExample = () => {
    const [formResult, setFormResult] = useState<Record<string, unknown> | false>(false);
    const [showPopover, setShowPopover] = useState(false);

    return (
        <Form
            onSubmit={setFormResult}
            onInvalid={() => setFormResult({})}
            style={{ width: "250px" }}
        >
            <Col gap={20} alignItems="center">
                <TextField name="textField" required />
                <TextArea name="textArea" required />
                <Checkbox name="checkbox" required label="Check me" />
                <RadioButton name="radioButton" required label="Check me" />
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
                    visible={formResult && showPopover}
                    onShow={() => setShowPopover(true)}
                    onHide={() => setShowPopover(false)}
                >
                    <Popover.Content>
                        <Button style={{ width: "250px" }} type="submit">
                            Submit
                        </Button>
                    </Popover.Content>
                    <Popover.Popper>{formResult && formatFormResult(formResult)}</Popover.Popper>
                </Popover>
            </Col>
        </Form>
    );
};

export default FormExample;
