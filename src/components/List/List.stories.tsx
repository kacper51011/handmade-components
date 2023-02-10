import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import List from "./List";
import Button from "../Button";

export default {
  title: "Components/List",
  component: List,
  argTypes: {},
} as ComponentMeta<typeof List>;

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof List> = (args) => (
  <List {...args}>
    <Button
      variant={"primary"}
      sharpness={"primary"}
      size={"small"}
      fullWidth={false}
    ></Button>
    <Button
      variant={"primary"}
      sharpness={"primary"}
      size={"small"}
      fullWidth={false}
    ></Button>
    <Button
      variant={"primary"}
      sharpness={"primary"}
      size={"small"}
      fullWidth={false}
    ></Button>
  </List>
);

// Reuse that template for creating different stories
export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: "row",
  justifyContent: "center",
};

export const Vertical = Template.bind({});
Vertical.args = {};
