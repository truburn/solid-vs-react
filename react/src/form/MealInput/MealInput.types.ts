import { UpdateField } from "@/routes/EditRecipe";
import { Meal } from "@/library/MealList";

export interface MealInputProps {
  updateField?: UpdateField;
  value?: Meal[];
}
