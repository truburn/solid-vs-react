import type { Meta, StoryObj } from "@storybook/react";
import {
  MealList as MealListComponent,
  MealListProps,
} from "@/components/MealList";

const meta: Meta<typeof MealListComponent> = {
  component: MealListComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const MealList: Story = {
  render: (args) =>
    renderStory({
      ...args,
      title: "Recipe meals is defined by the App Context",
    }),
};

export const ListFromProps: Story = {
  render: (args) =>
    renderStory({
      ...args,
      title: "Meal list is passed in as a prop",
    }),
  args: {
    meals: ["breakfast", "dessert"],
  },
};

interface RenderStoryProps extends MealListProps {
  title?: string;
}

function renderStory(_args: RenderStoryProps) {
  const { title, ...args } = _args;
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
    <>
      <p>
        <strong>{title}</strong>
      </p>
      {colors.map((colorKey) => (
        <>
          <p key={colorKey} style={{ marginTop: 16, marginBottom: 0 }}>
            {colorKey}
          </p>
          <MealListComponent {...args} colorKey={colorKey} />
        </>
      ))}
    </>
  );
}
