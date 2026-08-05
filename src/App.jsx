import Home from "./pages/Home-page/Home";
import Blog from "./pages/Blog-page/Blog";
import AboutUs from "./pages/AboutUs-page/AboutUs";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout/Layout";
import Details from "./pages/Details/Details";
function App() {
  const router =
createBrowserRouter([
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
    ],
  },
]);
  return <><RouterProvider router={router}/></>;
}

export default App;
