import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Hash, Row } from "../../src";

export default {
    title: "Hash",
    component: Hash,
} as ComponentMeta<typeof Hash>;

const Template: ComponentStory<typeof Hash> = (args) => (
    <Row style={{ width: "10%" }}>
        <Hash {...args} />
    </Row>
);

export const Primary = Template.bind({});
Primary.args = {
    hash: "0x123456789abcdefghijklmnopqrstuvwxyz",
    variant: "body1",
};
