import styled, { css } from "styled-components";
import { WithColorProps } from "../../src";
import withColor from "../../src/utils/hoc/withColor/withColor";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const StyledWithColor = styled.div<WithColorProps>(
    ({ color }) => css`
        background-color: ${color};
        width: 100%;
        height: 100px;
    `,
);

const WithColorExample = withColor(StyledWithColor);

export default {
    title: "WithColor",
    component: WithColorExample,
} as ComponentMeta<typeof WithColorExample>;

const Template: ComponentStory<typeof WithColorExample> = (args) => <WithColorExample {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    color: "primary", //Common must be a theme palette key
};
