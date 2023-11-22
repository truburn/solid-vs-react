import { ThemeColorKey } from "@/theme";

export interface MealListProps {
  meals?: Meal[];
  color?: ThemeColorKey;
  align?: "left" | "right";
}

export interface MealListStyleProps {
  alignRight?: boolean;
  colorKey?: ThemeColorKey;
}

export type Meal =
  | "breakfast"
  | "lunch"
  | "dinner"
  | "snack"
  | "brunch"
  | "appetizer"
  | "dessert";
