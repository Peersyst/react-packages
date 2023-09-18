import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Typography } from "../../src";

export default {
    title: "Typography",
    component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: "h1",
    children: "Hello World",
};

export const NumberOfLines = Template.bind({});
NumberOfLines.args = {
    variant: "h1",
    numberOfLines: 2,
    children:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nulla veniam eos perferendis exercitationem beatae earum, voluptatibus assumenda. Illum perferendis voluptate voluptatum fugiat placeat officia libero accusamus, eligendi quasi temporibus!",
};
