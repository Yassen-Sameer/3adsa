import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout/Layout";
import Home from "./pages/Home-page/Home";
import Blog from "./pages/Blog-page/Blog";
import AboutUs from "./pages/AboutUs-page/AboutUs";
import Details from "./pages/Details/Details";
import NotFound from "./pages/NotFound/NotFound";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "blog",
          element: <Blog />,
        },
        {
          path: "details/:id",
          element: <Details />,
        },
        {
          path: "about",
          element: <AboutUs />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ],
  {
    basename: "/3adsa/",
  },
);
export default function App() {
  return <RouterProvider router={router} />;
}
