import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Components/Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      Component: RootLayout,
      children: [
        {
            index:true,
            element: <Home />
        }
      ]
    },
  ]);