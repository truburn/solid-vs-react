import { createBrowserRouter, redirect } from "react-router-dom";
import { Page } from "@/layout/Page";
import { AddEdit } from "@/pages/AddEdit";
import { ErrorPage } from "@/pages/ErrorPage";
import { Home } from "@/pages/Home";
import { PageNotFound } from "@/pages/PageNotFound";
import { Recipe } from "@/pages/Recipe";
import recipeList, { getRecipe } from "@/storybook/RecipeSamples";

export const router = createBrowserRouter([
  {
    element: <Page />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        children: [
          {
            index: true,
            element: <Home />,
            loader: async () => {
              return recipeList as Recipe[];
            },
          },
          {
            path: "recipe",
            children: [
              {
                index: true,
                loader: () => redirect("/"),
              },
              {
                path: "new",
                element: <AddEdit />,
              },
              {
                path: "edit",
                children: [
                  {
                    index: true,
                    loader: () => redirect("/recipe/new"),
                  },
                  {
                    path: ":recipeID",
                    element: <AddEdit />,
                    loader: async ({ params }) => {
                      return fetchRecipe(params.recipeID);
                    },
                  },
                ],
              },
              {
                path: ":recipeID",
                element: <Recipe />,
                loader: async ({ params }) => {
                  const recipe = fetchRecipe(params.recipeID);
                  return { recipe, recipeList };
                },
              },
            ],
          },
        ],
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

function fetchRecipe(recipeID?: string) {
  if (!recipeID) return redirect("/");
  const recipe = getRecipe(recipeID);
  if (!recipe) return redirect("/");
  return recipe;
}
