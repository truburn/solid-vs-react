import { UpdateField } from "@/routes/EditRecipe";
import { Ingredient } from "@/library/Ingredients";

export interface IngredientsInputProps {
  updateField?: UpdateField;
  value?: Ingredient[];
}
