import type { Meta, StoryObj } from "@storybook/react";
import {
  RecipeList as RecipeListComponent,
  RecipeListProps,
} from "@/components/RecipeList";

const meta: Meta<typeof RecipeListComponent> = {
  component: RecipeListComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const AsListItems: Story = {
  render: renderStory,
  args: {
    style: { maxWidth: 850 },
  },
};

export const AsTiles: Story = {
  render: renderStory,
  args: {
    asTiles: true,
    style: { maxWidth: 850 },
  },
};

export const AsSideColumn: Story = {
  render: renderStory,
  args: {
    style: { maxWidth: 350 },
  },
};

function renderStory(args: RecipeListProps) {
  const style = {
    display: "flex",
    alignItems: "stretch",
    justifyContent: "center",
    overflow: "hidden",
  };

  return (
    <div style={style}>
      <RecipeListComponent {...args} />
    </div>
  );
}
