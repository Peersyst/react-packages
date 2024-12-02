import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button, Modal, Row } from "../../src";
import { useEffect, useState } from "react";

export default {
    title: "Modal",
    component: Modal,
} as ComponentMeta<typeof Modal>;

let count = 0;

// Used to check when the components is unmounted
function InnerComponent() {
    useEffect(() => {
        count++;
    }, []);

    return <p>Open count: {count}</p>;
}

const Template: ComponentStory<typeof Modal> = (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Row alignItems="center" justifyContent="center" flex={1}>
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal open={isOpen} onClose={() => setIsOpen(false)} {...args}>
                <InnerComponent />
            </Modal>
        </Row>
    );
};

export const Primary = Template.bind({});
Primary.args = {};
