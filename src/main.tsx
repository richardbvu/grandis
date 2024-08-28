import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./scenes/shared/pageLayout.tsx";
import Home from "./scenes/home/index.tsx";
import Food from "./scenes/food/index.tsx";
import Events from "./scenes/events/index.tsx";
import Art from "./scenes/art/index.tsx";
import About from "./scenes/about/index.tsx";
import Office from "./scenes/office/index.tsx";
import News from "./scenes/news/index.tsx";
import Contact from "./scenes/contact/index.tsx";
import ErrorPage from "./scenes/shared/errorPage.tsx";
import FoodSallys from "./scenes/food/foodSallys.tsx";
import FoodBistro from "./scenes/food/foodBistro.tsx";
import FoodPho from "./scenes/food/foodPho.tsx";
import FoodMarigold from "./scenes/food/foodMarigold.tsx";
import FoodCoastal from "./scenes/food/foodCoastal.tsx";
import FoodSavoryOak from "./scenes/food/foodSavoryOak.tsx";
import FoodOliveAndJuni from "./scenes/food/foodOliveAndJuni.tsx";
import FoodTheWhispering from "./scenes/food/foodTheWhispering.tsx";
import FoodTavern from "./scenes/food/foodTavern.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "food",
        element: <Food />,
      },
      {
        path: "food/sallys-super-salad",
        element: <FoodSallys />,
      },
      {
        path: "food/blue-horizon-bistro",
        element: <FoodBistro />,
      },
      {
        path: "food/velvet-pho",
        element: <FoodPho />,
      },
      {
        path: "food/marigold-desserts",
        element: <FoodMarigold />,
      },
      {
        path: "food/coastal-foreign",
        element: <FoodCoastal />,
      },
      {
        path: "food/the-savory-oak",
        element: <FoodSavoryOak />,
      },
      {
        path: "food/olive-and-juni",
        element: <FoodOliveAndJuni />,
      },
      {
        path: "food/the-whispering",
        element: <FoodTheWhispering />,
      },
      {
        path: "food/radiant-ember-tavern",
        element: <FoodTavern />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "art",
        element: <Art />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "office",
        element: <Office />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
