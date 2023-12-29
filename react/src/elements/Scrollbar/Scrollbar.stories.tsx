import type { Meta, StoryObj } from "@storybook/react";
import {
  Scrollbar as ScrollbarComponent,
  ScrollbarProps,
} from "@/elements/Scrollbar";
import { colorKey } from "@/storybook/argTypes";
import { getDummySummary } from "@/dummyData";
import { Mixins } from "@/utils";

const meta: Meta<typeof ScrollbarComponent> = {
  component: ScrollbarComponent,
  parameters: {
    controls: {
      exclude: ["children", "id", "className"],
    },
    layout: "fullscreen",
  },
  args: {
    showBorder: false,
    showScrollbar: false,
  },
  argTypes: {
    colorKey,
    showBorder: {
      table: {
        defaultValue: { summary: false },
      },
    },
    showScrollbar: {
      table: {
        defaultValue: { summary: false },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Scrollbar: Story = {
  render: ScrollbarStory,
  args: {
    children: Array(15)
      .fill(0)
      .map((_, idx) => {
        return (
          <p key={idx} style={{ ...Mixins.spacing("margin", 16) }}>
            {getDummySummary(Math.ceil(Math.random() * 10))}
          </p>
        );
      }),
    style: {
      width: "50%",
      height: "100%",
    },
  },
};

export const ScrollbarBorder: Story = {
  render: ScrollbarStory,
  name: "Scrollbar with Border",
  args: {
    showBorder: true,
    children: Array(10)
      .fill(0)
      .map((_, idx) => {
        return (
          <p key={idx} style={{ ...Mixins.spacing("margin", 16) }}>
            {getDummySummary(Math.ceil(Math.random() * 10))}
          </p>
        );
      }),
    style: {
      width: "50%",
      height: "75%",
    },
  },
};

export const AlwaysShow: Story = {
  render: ScrollbarStory,
  name: "Scrollbar Track Always Visible",
  args: {
    showScrollbar: true,
    children: (
      <p style={{ ...Mixins.spacing("margin", 16) }}>
        {getDummySummary(Math.ceil(Math.random() * 10))}
      </p>
    ),
    style: {
      width: "50%",
      height: "100%",
    },
  },
};

function ScrollbarStory(props: ScrollbarProps) {
  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <ScrollbarComponent {...props} />
    </div>
  );
}
