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
        path: "food/sallys",
        element: <FoodSallys />,
      },
      {
        path: "food/bistro",
        element: <FoodBistro />,
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
