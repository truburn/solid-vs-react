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
            element: <EditRecipe />,
            action: async ({ params, request }) => {
              const formData = await request.formData();
              const body = Object.fromEntries(formData.entries());
              console.log({ params, body });
              return null;
            },
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
                element: <EditRecipe />,
                action: async ({ params, request }) => {
                  const formData = await request.formData();
                  const body = Object.fromEntries(formData.entries());
                  console.log({ params, body });
                  return null;
                },
              },
            ],
          },
          {
            path: ":recipeID",
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
