import { createBrowserRouter, redirect } from "react-router-dom";
import { PageWrapper } from "@/layout/PageWrapper";
import { EditRecipe } from "@/routes/EditRecipe";
import { ErrorPage } from "@/routes/ErrorPage";
import { PageNotFound } from "@/routes/PageNotFound";
import { RecipeList } from "@/routes/RecipeList";
import { RecipePage } from "@/routes/RecipePage";

export const router = createBrowserRouter([
  {
    element: <PageWrapper />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <RecipeList />,
        errorElement: <ErrorPage />,
        loader: async () => {
          const response = await fetch(
            "https://recipes-api.jsburn.com/recipes",
          );
          const data = await response.json();
          return data;
        },
      },
      {
        path: "/recipe",
        children: [
          {
            index: true,
            loader: () => redirect("/"),
          },
          {
            path: "new",
            element: <EditRecipe isNew />,
          },
          {
            path: "edit",
            children: [
              {
                index: true,
                loader: () => redirect("/recipe/new"),
              },
              {
                path: ":id",
                element: <EditRecipe />,
              },
            ],
          },
          {
            path: ":id",
            element: <RecipePage />,
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
