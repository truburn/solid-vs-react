import { UpdateField } from "@/routes/EditRecipe";

export interface ServingsInputProps {
  updateField?: UpdateField;
  servingsValue?: Recipe["servings"];
  servingSizeValue?: Recipe["servingSize"];
}
