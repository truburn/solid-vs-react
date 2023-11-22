export interface IngredientsProps {
  ingredients?: Ingredient[];
  noTitle?: boolean;
}

export enum MeasureUnit {
  TEASPOONS = "tsp",
  TABLESPOONS = "tbl",
  CUPS = "c",
  PINTS = "pt",
  QUARTS = "qt",
  GALLONS = "gal",
  OUNCES = "oz",
  POUNDS = "lb",
  GRAMS = "g",
  KILOGRAMS = "kg",
  MILILITERS = "ml",
  LITERS = "L",
}

export interface Ingredient {
  ingredientID?: EntryID;
  name: string;
  qty?: number;
  unit?: MeasureUnit | string;
  url?: string;
  summary?: string;
  cut?: string;
}
