import { UpdateField } from "@/routes/EditRecipe";
import { RecipeStep } from "@/library/Steps";

export interface StepsInputProps {
  updateField?: UpdateField;
  value?: RecipeStep[];
}
