import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import MealsRoot from "./pages/MealsPages/MealsRoot";
import MealsPageOne from "./pages/MealsPages/MealsPageOne";
import MealsPageTwo from "./pages/MealsPages/MealsPageTwo";
import MealsPageThree from "./pages/MealsPages/MealsPageThree";
import HomePage from "./pages/LandingPage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/Home",
    element: <HomePage />,
  },
  {
    path: "/Meals",
    element: <MealsRoot />,
    children: [
      {
        path: "",
        element: <MealsPageOne />,
      },
      {
        path: "one",
        element: <MealsPageOne />,
      },
      {
        path: "two",
        element: <MealsPageTwo />,
      },
      {
        path: "three",
        element: <MealsPageThree />,
      },
    ],
  },
]);
const RouterApp = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default RouterApp;
