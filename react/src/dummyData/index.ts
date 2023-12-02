// import { Ingredient } from "@/components/Ingredients";
import textOptions from "./textOptions.json";
// import { RecipeStep } from "@/library/Steps";
// import { Recipe } from "@/routes/RecipePage";
// import { MeasureUnit } from "@/form/MeasurementInput";

export function getDummySummary(count = 1): string {
  const group = textOptions[Math.floor(Math.random() * textOptions.length)];
  const lines = group.split(". ");
  const selection = Array(count)
    .fill("line")
    .map(() => {
      return lines[Math.floor(Math.random() * lines.length)];
    });
  return selection.join(". ").substring(0, 500);
}

// export function getDummyIngredients(count = 3): Ingredient[] {
//   const units: string[] = Object.values(MeasureUnit);

//   return Array(count)
//     .fill("Ingredient")
//     .map((name, idx) => ({
//       ingredientID: generateUID(),
//       name: `${name} ${idx + 1}`,
//       qty: Math.round(Math.random() * 10 * 100) / 100,
//       unit: units[Math.floor(Math.random() * units.length)],
//       summary: getDummySummary(Math.ceil(Math.random() * 5)),
//     }));
// }

// export function getDummyRecipes(count = 1): Recipe | Recipe[] {
//   const meals = [
//     "breakfast",
//     "lunch",
//     "dinner",
//     "snack",
//     "brunch",
//     "appetizer",
//     "dessert",
//   ];
//   const cuisines = [
//     "Creole",
//     "Southern",
//     "Mexican",
//     "Japanese",
//     "Filipino",
//     "French",
//     "Italian",
//   ];
//   const units: string[] = Object.values(MeasureUnit);

//   const recipes = Array(count)
//     .fill("Recipe")
//     .map(() => {
//       const sentence = getDummySummary().split(" ");

//       const meal: string[] = [];
//       const mealCount = Math.ceil(Math.random() * 3);

//       while (meal.length < mealCount) {
//         const tmpMeal = meals[Math.floor(Math.random() * meals.length)];
//         if (!meal.includes(tmpMeal)) {
//           meal.push(tmpMeal);
//         }
//       }

//       const stepCount = Math.ceil(Math.random() * 15) + 3;
//       const steps: RecipeStep[] = Array(stepCount)
//         .fill("Step")
//         .map(() => ({
//           body: getDummySummary(Math.ceil(Math.random() * 5) + 1),
//         }));

//       return {
//         recipeID: generateUID(),
//         name: sentence
//           .slice(0, Math.ceil(Math.random() * 6) + 2)
//           .join(" ")
//           .substring(0, 50),
//         author: "Anonymous",
//         summary: getDummySummary(Math.ceil(Math.random() * 10) + 2),
//         cuisine: cuisines[Math.floor(Math.random() * cuisines.length)],
//         meal: meal.sort(),
//         ingredients: getDummyIngredients(Math.ceil(Math.random() * 10) + 3),
//         steps,
//         created: new Date(),
//         updated: Math.random() > 0.5 ? new Date() : undefined,
//         servings: Math.ceil(Math.random() * 10),
//         servingSize: {
//           qty: Math.ceil(Math.random() * 2),
//           unit: units[Math.floor(Math.random() * units.length)],
//         },
//       };
//     });

//   if (count === 1) return recipes[0] as Recipe;

//   return recipes as Recipe[];
// }

export const generateUID = () => {
  const radix = 16;
  const start = 2;
  return [
    Math.random()
      .toString(radix)
      .slice(start, start + 8),
    Math.random()
      .toString(radix)
      .slice(start, start + 4),
    Math.random()
      .toString(radix)
      .slice(start, start + 4),
    Math.random()
      .toString(radix)
      .slice(start, start + 4),
    Math.random().toString(radix).slice(start),
  ].join("-");
};
