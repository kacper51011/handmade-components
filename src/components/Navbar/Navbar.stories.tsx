import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Navbar from "./Navbar";
import Button from "../Button";
import List from "../List";

export default {
  title: "Components/Navbar",
  component: Navbar,
  argTypes: {},
} as ComponentMeta<typeof Navbar>;

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof Navbar> = (args) => (
  <Navbar {...args}>
    <List direction={"row"} gap={0}>
      <Button
        variant={"secondary"}
        sharpness={"primary"}
        size={"small"}
        fullWidth={false}
      ></Button>
      <Button
        variant={"secondary"}
        sharpness={"primary"}
        size={"small"}
        fullWidth={false}
      ></Button>
    </List>
    <List direction={"row"} gap={0}>
      <Button
        variant={"secondary"}
        sharpness={"primary"}
        size={"small"}
        fullWidth={false}
      />
      <Button
        variant={"secondary"}
        sharpness={"primary"}
        size={"small"}
        fullWidth={false}
      ></Button>
    </List>
  </Navbar>
);

// Reuse that template for creating different stories
export const Desktop = Template.bind({});
Desktop.args = {
  variant: "desktop",
};

export const Mobile = Template.bind({});
Mobile.args = {
  variant: "mobile",
};
