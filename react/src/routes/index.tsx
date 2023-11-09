import { createBrowserRouter, redirect } from "react-router-dom";
import { AppLayout } from "@/layout/AppLayout";
import { EditRecipe } from "@/routes/EditRecipe";
import { ErrorPage } from "@/routes/ErrorPage";
import { PageNotFound } from "@/routes/PageNotFound";
import { RecipeList } from "@/routes/RecipeList";
import { RecipePage } from "@/routes/RecipePage";

function redirectToList() {
  return redirect("/");
}

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <RecipeList />,
      },
      {
        path: "/recipe",
        children: [
          {
            index: true,
            loader: redirectToList,
          },
          {
            path: ":id",
            element: <RecipePage />,
            loader: ({ params }) => {
              if (!params.id) return redirectToList();
              return null;
            },
          },
          {
            path: "new",
            element: <EditRecipe isNew />,
          },
          {
            path: "edit/:id",
            element: <EditRecipe />,
            loader: ({ params }) => {
              if (!params.id) return redirect("/recipe/new");
              return null;
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
]);
