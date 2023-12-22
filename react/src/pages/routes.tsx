import { createBrowserRouter, redirect } from "react-router-dom";
import { Page } from "@/layout/Page";
import { AddEdit } from "@/pages/AddEdit";
import { ErrorPage } from "@/pages/ErrorPage";
import { Home } from "@/pages/Home";
import { PageNotFound } from "@/pages/PageNotFound";
import { Recipe } from "@/pages/Recipe";

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
                  },
                ],
              },
              {
                path: ":recipeID",
                element: <Recipe />,
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
