const recipes: Recipe[] = [
  {
    recipeID: "recipe001",
    name: "Grilled Cheese Sandwich",
    author: "Edward Seburn",
    summary: "A crispy, toasted sandwich with yummy, ooey-gooey cheese!",
    meal: ["lunch", "dinner", "snack"],
    cuisine: "American",
    created: new Date("2020-09-09T01:30:00.000Z"),
  },
  {
    recipeID: "recipe002",
    name: "Peanut Butter & Jelly Sandwich",
    author: "Daddy Seburn",
    summary:
      "A soft and comforting sandwich filled with creamy peanut butter and sweet grape jelly.",
    meal: ["lunch", "dinner", "snack"],
    cuisine: "American",
    created: new Date("1986-07-21T16:20:00.000Z"),
  },
  {
    recipeID: "recipe003",
    name: "Scrambled Eggs",
    author: "Mommy Seburn",
    summary: "Fluffy and filling scrabled eggs.",
    meal: [],
    created: new Date("1982-01-05T09:50:00.000Z"),
  },
];

export function getRecipe(recipeID?: string) {
  if (!recipeID) return recipes[0];

  return recipes.find((recipe) => recipe.recipeID === recipeID);
}
