import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
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
Events;
Art;
About;
Office;
News;
Contact;
ErrorPage;
Suspense;

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
