import { UpdateField } from "@/routes/EditRecipe";

export interface MealInputProps {
  updateField?: UpdateField;
  value?: Meal[];
}

export type Meal =
  | "breakfast"
  | "lunch"
  | "dinner"
  | "snack"
  | "brunch"
  | "appetizer"
  | "dessert";
