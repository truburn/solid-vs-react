/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import { CSSProperties, EventHandler, ReactElement } from "react";
import { ThemeColorKey, ThemeFontKey } from "./theme";
import { Ingredients } from "./components/Ingredients";

declare global {
  interface MCElement {
    /** Styles to override the base styles. */
    className?: string;
    /** Inline CSS styles. */
    style?: CSSProperties;
    /** Content to display within the element. */
    children?: ReactElement | ReactElement[];
    /** Unique ID to assign to the element. */
    id?: string;
  }

  interface MCStyleKeys {
    /** Theme color group for styling the element */
    colorKey?: ThemeColorKey;
    /** Font family to use for the text display. */
    fontKey?: ThemeFontKey;
  }

  type MCComponent = Omit<MCElement, "children">;

  interface MCInput extends MCElement, MCStyleKeys {
    /** Current value of the input field */
    value?: any;
    /** Default value to use if the value is undefined */
    defaultValue?: any;
    /** Action to take when the value is changed */
    onChange?: (newValue: any, event?: EventHandler) => void;
  }

  interface Ingredient {
    ingredientID?: string;
    name: string;
    measurement?: ItemMeasurement;
    url?: string;
    summary?: string;
  }

  interface ItemMeasurement {
    qty?: number;
    unit?: string;
    cut?: string;
  }

  type Meal =
    | "breakfast"
    | "brunch"
    | "lunch"
    | "dinner"
    | "snack"
    | "appetizer"
    | "dessert";

  interface Servings {
    total?: number;
    size?: ItemMeasurement;
  }

  interface Step {
    body: string;
    ingredients?: Ingredient[];
    time?: {
      qty: number;
      unit: "seconds" | "minutes" | "hours" | "days";
    };
    note?: string;
  }

  interface Recipe {
    recipeID?: string;
    name: string;
    summary?: string;
    cuisine?: string;
    meal?: Meal[];
    ingredients?: Ingredient[];
    steps?: Step[];
    revisions?: Revision[];
    author?: string;
    created?: Date;
    updated?: Date;
    servings?: Servings;
  }

  interface Revision {
    revisionID: string;
    date: Date;
    recipe: Recipe;
  }
}
