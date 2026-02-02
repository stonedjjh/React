import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../views/Home";
import Detail from "../views/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
]);

const MyRoutes = () => <RouterProvider router={router} />;

export default MyRoutes;
