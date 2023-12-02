import type { Meta, StoryObj } from "@storybook/react";
import { SectionHeader as SectionHeaderComponent } from "@/elements/SectionHeader";

const meta: Meta<typeof SectionHeaderComponent> = {
  component: SectionHeaderComponent,
  parameters: {
    controls: {
      exclude: ["id", "className", "children", "depth"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SectionHeader: Story = {
  render: (args) => (
    <>
      {Array(5)
        .fill(0)
        .map((_, idx) => {
          const depth = idx + 2;
          const title = `${args.title ?? "Section Header"} - Level ${depth}`;
          return (
            <SectionHeaderComponent
              key={depth}
              {...args}
              title={title}
              depth={depth}
            />
          );
        })}
    </>
  ),
  args: {
    title: "Section Header",
  },
};
