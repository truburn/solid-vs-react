import { Ingredient, MeasureUnit } from "@/library/Ingredients";
import { Meal } from "@/library/MealInput";
import { RecipeStep } from "@/library/Steps";

export interface Recipe {
  recipeID?: EntryID;
  name: string;
  summary?: string;
  cuisine?: string;
  meal?: Meal[];
  ingredients?: Ingredient[];
  steps?: RecipeStep[];
  revisions?: Revision[];
  author?: string;
  created?: Date;
  updated?: Date;
  servings?: number;
  servingSize?: {
    qty: number;
    unit?: MeasureUnit | string;
  };
}

export interface Revision {
  revisionID: EntryID;
  date: Date;
  recipe: Recipe;
}
