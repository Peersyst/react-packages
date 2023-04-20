import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CodeField } from "../../src";

export default {
    title: "CodeField",
    component: CodeField,
} as ComponentMeta<typeof CodeField>;

const Template: ComponentStory<typeof CodeField> = (args) => <CodeField {...args} />;

export const Example = Template.bind({});

Example.args = {
    digits: 6,
    onChange: undefined,
};
