import type { Meta, StoryObj } from "@storybook/react";
import { Fieldset as FieldsetComponent } from "./Fieldset";

const meta: Meta<typeof FieldsetComponent> = {
  title: "FormElements/Fieldset",
  component: FieldsetComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Fieldset: Story = {};
