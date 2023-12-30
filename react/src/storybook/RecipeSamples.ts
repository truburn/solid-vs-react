const recipes: Recipe[] = [
  {
    recipeID: "recipe001",
    name: "Grilled Cheese Sandwich",
    author: "Edward Seburn",
    summary:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium.",
    meal: ["lunch", "dinner", "snack"],
    cuisine: "American",
    created: "2020-09-09T06:30:00.000Z",
  },
  {
    recipeID: "recipe002",
    name: "Peanut Butter & Jelly Sandwich",
    author: "Daddy Seburn",
    summary:
      "A soft and comforting sandwich filled with creamy peanut butter and sweet grape jelly.",
    meal: ["lunch", "dinner", "snack"],
    cuisine: "American",
    created: "1986-07-21T16:20:00.000Z",
  },
  {
    recipeID: "recipe003",
    name: "Scrambled Eggs",
    author: "Mommy Seburn",
    summary:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium.",
    meal: [],
    created: "1982-01-05T09:50:00.000Z",
  },
  {
    recipeID: "recipe004",
    name: "Pancakes",
    author: "Daddy Seburn",
    summary:
      "Little circles of happiness! Even better with warm and sticky syrup drizzled on top.",
    meal: ["breakfast"],
    created: "2023-12-23T07:31:00.000Z",
  },
];

export function getRecipe(recipeID?: string) {
  if (!recipeID) return recipes[0];

  return recipes.find((recipe) => recipe.recipeID === recipeID);
}

export default recipes;
