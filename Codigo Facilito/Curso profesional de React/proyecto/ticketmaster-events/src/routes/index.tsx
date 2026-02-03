import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../views/Home";
import Detail from "../views/Detail";
import Error404 from "../views/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    //ruta para error 404
    errorElement: <Error404 />,
  },
  {
    path: "/detail/:eventId",
    element: <Detail />,
  },
]);

const MyRoutes = () => <RouterProvider router={router} />;

export default MyRoutes;
