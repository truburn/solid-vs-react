import { Ingredient } from "@/library/Ingredients";

export interface StepsProps {
  steps?: RecipeStep[];
  noTitle?: boolean;
}

export interface RecipeStep {
  body: string;
  ingredients?: Ingredient[];
  time?: {
    qty: number;
    unit: "seconds" | "minutes" | "hours" | "days";
  };
}
