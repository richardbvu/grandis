import React, { StrictMode, Suspense } from "react";
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

const HomeLazy = React.lazy(() => import("./scenes/home/index.tsx"));
const FoodLazy = React.lazy(() => import("./scenes/food/index.tsx"));
const EventsLazy = React.lazy(() => import("./scenes/events/index.tsx"));
const ArtLazy = React.lazy(() => import("./scenes/art/index.tsx"));
const AboutLazy = React.lazy(() => import("./scenes/about/index.tsx"));
const OfficeLazy = React.lazy(() => import("./scenes/office/index.tsx"));
const ContactLazy = React.lazy(() => import("./scenes/contact/index.tsx"));
const ErrorPageLazy = React.lazy(() => import("./scenes/shared/errorPage.tsx"));
const FoodSallysLazy = React.lazy(() => import("./scenes/food/foodSallys.tsx"));
const FoodBistroLazy = React.lazy(() => import("./scenes/food/foodBistro.tsx"));
const FoodPhoLazy = React.lazy(() => import("./scenes/food/foodPho.tsx"));
const FoodMarigoldLazy = React.lazy(
  () => import("./scenes/food/foodMarigold.tsx"),
);
const FoodCoastalLazy = React.lazy(
  () => import("./scenes/food/foodCoastal.tsx"),
);
const FoodSavoryOakLazy = React.lazy(
  () => import("./scenes/food/foodSavoryOak.tsx"),
);
const FoodOliveAndJuniLazy = React.lazy(
  () => import("./scenes/food/foodOliveAndJuni.tsx"),
);
const FoodTheWhisperingLazy = React.lazy(
  () => import("./scenes/food/foodTheWhispering.tsx"),
);
const FoodTavernLazy = React.lazy(() => import("./scenes/food/foodTavern.tsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div></div>}>
        <PageLayout />
      </Suspense>
    ),
    errorElement: <ErrorPageLazy />,
    children: [
      {
        index: true,
        path: "/",
        element: <HomeLazy />,
      },
      {
        path: "food",
        element: <FoodLazy />,
      },
      {
        path: "food/sallys-super-salad",
        element: <FoodSallysLazy />,
      },
      {
        path: "food/blue-horizon-bistro",
        element: <FoodBistroLazy />,
      },
      {
        path: "food/velvet-pho",
        element: <FoodPhoLazy />,
      },
      {
        path: "food/marigold-desserts",
        element: <FoodMarigoldLazy />,
      },
      {
        path: "food/coastal-foreign",
        element: <FoodCoastalLazy />,
      },
      {
        path: "food/the-savory-oak",
        element: <FoodSavoryOakLazy />,
      },
      {
        path: "food/olive-and-juni",
        element: <FoodOliveAndJuniLazy />,
      },
      {
        path: "food/the-whispering",
        element: <FoodTheWhisperingLazy />,
      },
      {
        path: "food/radiant-ember-tavern",
        element: <FoodTavernLazy />,
      },
      {
        path: "events",
        element: <EventsLazy />,
      },
      {
        path: "art",
        element: <ArtLazy />,
      },
      {
        path: "about",
        element: <AboutLazy />,
      },
      {
        path: "office",
        element: <OfficeLazy />,
      },
      {
        path: "contact",
        element: <ContactLazy />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
