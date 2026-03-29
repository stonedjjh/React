import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../views/Home";
import Detail from "../views/Detail";
import Error404 from "../views/Error404";
import Profile from "../views/Profile";
import Myinfo from "../views/Profile/components/Myinfo";
import LikedEvents from "../views/Profile/components/LikedEvents";

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
  {
    path: "/profile",
    element: <Profile />,
    children: [
      {
        path: "my-info",
        element: <Myinfo />,
      },
      {
        path: "liked-events",
        element: <LikedEvents />,
      },
    ],
  },
]);

const MyRoutes = () => <RouterProvider router={router} />;

export default MyRoutes;
