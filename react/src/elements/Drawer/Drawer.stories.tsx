import type { Meta, StoryObj } from "@storybook/react";
import { Drawer as DrawerComponent } from "./Drawer";

const meta: Meta<typeof DrawerComponent> = {
  component: DrawerComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Drawer: Story = {};
