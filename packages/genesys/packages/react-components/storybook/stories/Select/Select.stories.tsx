import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Select } from "../../../src";

export default {
    title: "Select",
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Example = Template.bind({});
Example.args = {
    options: [
        { value: 2, label: "Option 2" },
        { value: 1, label: "Option 1" },
    ],
    //We need to pass undefined because storybook add a dummy callback and the `useControlled` doesn't work as expected
    onOpen: undefined,
    onChange: undefined,
};
