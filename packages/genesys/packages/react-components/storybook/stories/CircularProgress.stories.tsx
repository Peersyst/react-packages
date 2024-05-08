import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CircularProgress } from "../../src";

export default {
    title: "CircularProgress",
    component: CircularProgress,
} as ComponentMeta<typeof CircularProgress>;

const Template: ComponentStory<typeof CircularProgress> = (args) => <CircularProgress {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
