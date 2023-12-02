import type { Meta, StoryObj } from "@storybook/react";
import { Button as ButtonComponent } from "./Button";
import { ButtonVariant } from "./Button.types";
import { ButtonStory } from "./ButtonStory";
import { faRocketLaunch } from "@fortawesome/pro-duotone-svg-icons";
import { colorKey, fontKey, icon } from "../../storybook/argTypes";

const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent,
  args: {
    icon: faRocketLaunch,
    fontKey: "body",
  },
  parameters: {
    controls: {
      include: ["label", "icon", "id", "tooltip", "fontKey", "style"],
    },
  },
  argTypes: {
    colorKey,
    fontKey,
    icon,
    iconPosition: {
      table: {
        defaultValue: {
          summary: `If icon is defined and iconButton is not true, the default is "left"`,
        },
      },
    },
    buttonStyle: {
      table: {
        defaultValue: { summary: `"outline"` },
      },
    },
    disabled: {
      table: {
        defaultValue: { summary: false },
      },
    },
    submit: {
      table: {
        defaultValue: { summary: false },
      },
    },
    tooltip: {
      control: "text",
      table: {
        defaultValue: { summary: "label value" },
      },
    },
    variant: {
      table: {
        defaultValue: { summary: `"standard"` },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const StandardButton: Story = {
  name: "Standard Button",
  render: ButtonStory,
  args: {
    label: "Standard",
  },
};

export const RoundButton: Story = {
  render: ButtonStory,
  args: {
    label: "Round",
    variant: ButtonVariant.ROUND,
  },
};

export const SquareButton: Story = {
  render: ButtonStory,
  args: {
    label: "Square",
    variant: ButtonVariant.SQUARE,
  },
};

export const TextButton: Story = {
  render: ButtonStory,
  args: {
    label: "Text",
    variant: ButtonVariant.TEXT,
  },
};

export const CustomButton: Story = {
  render: ButtonStory,
  args: {
    label: "Custom",
    variant: ButtonVariant.CUSTOM,
    style: {
      borderWidth: 2,
      borderTopLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderTopRightRadius: 4,
      borderBottomLeftRadius: 4,
      padding: "0.25rem 1rem",
    },
  },
};
