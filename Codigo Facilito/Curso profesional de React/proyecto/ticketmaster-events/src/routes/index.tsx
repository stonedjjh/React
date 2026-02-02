import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hola a mi home</h1>,
  },
  {
    path: "/detail",
    element: <div>Detail</div>,
  },
]);

const MyRoutes = () => <RouterProvider router={router} />;

export default MyRoutes;
