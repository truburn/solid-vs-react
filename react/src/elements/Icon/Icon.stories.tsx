import type { Meta, StoryObj } from "@storybook/react";
import { Icon as IconComponent } from "./Icon";
import { faRocketLaunch } from "@fortawesome/pro-duotone-svg-icons";
import { icon } from "../../storybook/argTypes";
import { theme } from "../../theme"

const meta: Meta<typeof IconComponent> = {
  component: IconComponent,
  parameters: {
    controls: {
      exclude: ["className"]
    },
    layout: "centered",
  },
  args: {
    icon: faRocketLaunch,
    style: {
      width: "2rem",
      height: "2rem",
      color: theme.colors.primary.main,
    }
  },
  argTypes: {
    icon,
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Icon: Story = {};
