import { UpdateField } from "@/routes/EditRecipe";
import { Recipe } from "@/routes/RecipePage";

export interface ServingsInputProps {
  updateField?: UpdateField;
  servingsValue?: Recipe["servings"];
  servingSizeValue?: Recipe["servingSize"];
}
