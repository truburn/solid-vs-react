import type { Meta, StoryObj } from "@storybook/react";
import { TextInput as TextInputComponent } from "./TextInput";

const meta: Meta<typeof TextInputComponent> = {
  title: "FormElements/TextInput",
  component: TextInputComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const TextInput: Story = {};
