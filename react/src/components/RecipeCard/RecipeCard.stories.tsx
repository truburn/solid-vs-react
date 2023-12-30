import type { Meta, StoryObj } from "@storybook/react";
import {
  RecipeCard as RecipeCardComponent,
  RecipeCardProps,
} from "@/components/RecipeCard";
import { getRecipe } from "@/storybook/RecipeSamples";

const meta: Meta<typeof RecipeCardComponent> = {
  component: RecipeCardComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const AsListItem: Story = {
  render: renderStory,
  args: {
    recipe: getRecipe("recipe001"),
  },
};

export const AsTile: Story = {
  render: renderStory,
  args: {
    recipe: getRecipe("recipe001"),
    style: { width: 300 },
  },
};

function renderStory(args: RecipeCardProps) {
  const colors: MCStyleKeys["colorKey"][] = [
    "standard",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
  ];

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: 824,
        position: "relative",
        alignSelf: "center",
        overflow: "hidden",
      }}
    >
      <ul
        style={{
          flex: 1,
          overflow: "auto",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {colors.map((colorKey) => (
          <li key={colorKey} style={{ padding: "0.5rem" }}>
            <RecipeCardComponent {...args} colorKey={colorKey} />
          </li>
        ))}
      </ul>
    </div>
  );
}
