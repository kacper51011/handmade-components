import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    textColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};
