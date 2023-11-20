export interface EditRecipeProps {}

export type UpdateField = (newValue: Partial<Recipe>) => void;

export const INTIAL_RECIPE = {
  name: "My Awesome Recipe",
  author: "Anonymous",
};
