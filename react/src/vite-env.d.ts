/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

type MeasureUnit =
  | "tsp"
  | "tbl"
  | "c"
  | "pt"
  | "qt"
  | "gal"
  | "oz"
  | "lb(s)"
  | "g"
  | "kg"
  | "ml"
  | "L";

type Meal =
  | "breakfast"
  | "lunch"
  | "dinner"
  | "snack"
  | "brunch"
  | "appetizer"
  | "dessert";

interface Ingredient {
  ingredientID?: string;
  name: string;
  qty?: number;
  unit?: MeasureUnit;
  url?: string;
  summary?: string;
  cut?: string;
}

interface Revision {
  revisionID: string;
  date: Date;
  recipe: Recipe;
}

interface RecipeStep {
  body: string;
  ingredients?: Ingredient[];
  time?: {
    qty: number;
    unit: "seconds" | "minutes" | "hours" | "days";
  };
}

interface Recipe {
  recipeID?: string;
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
  servings?: {
    qty: number;
    unit?: MeasureUnit;
  };
  servingSize?: {
    qty: number;
    unit?: MeasureUnit;
  };
}
