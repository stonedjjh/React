# React Router

React Router es un enrutador de múltiples estrategias para React que cierra la brecha entre React 18 y React 19. Puedes usarlo al máximo como un framework de React o de la manera más mínima que desees

## Instalación

Puedes instalar React Router usando npm o yarn. Aquí tienes los comandos para ambos gestores de paquetes:

```bash
npm install react-router
```

```bash
yarn add react-router
```

React route también permite instalar un template con la siguiente línea:

```bash
npx create-react-router@latest my-react-router-app
```

## Componentes principales

- `<BrowserRouter>`: Utiliza la API de historial HTML5 para mantener la UI sincronizada con la URL.

- `<Routes>`: Contenedor para una serie de rutas.

- `<Link>`: Componente para crear enlaces de navegación.

```javascript
<Link to="/about">Go to About Page</Link>
```

- `<Route>`: Define una ruta específica y el componente que se debe renderizar cuando la ruta coincide.

```javascript
const route = [
  {
    path: "/",
    element: (
      <div>
        <h1>Home Page</h1>
        <Link to="/about">Go to About Page</Link>
      </div>
    ),
  },
  {
    path: "/about",
    element: <div>About Page</div>,
  },
];
```

- **path**: La ruta URL.

- **element**: El componente que se renderiza cuando la ruta coincide.

- **errorElement**: El componente que se renderiza cuando ocurre un error en la ruta.

- `<createBrowserRouter>`: Crea un enrutador basado en el historial del navegador, se le pasa un arreglo de rutas.

```javascript
const router = createBrowserRouter(route);
```

- `<RouterProvider>`: Proporciona el enrutador a la aplicación.

```javascript
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);

- `useNavigate`: Hook para programáticamente navegar entre rutas.

- `useParams`: Hook para acceder a los parámetros de la ruta actual.

- `<Outlet>`: Componente que renderiza las rutas hijas en rutas anidadas.

```

## Rutas anidadas

React Router permite definir rutas anidadas para crear estructuras de navegación más complejas.

```javascript
const router = createBrowserRouter([
  {
    path: "/profile",
    element: <Profile />,
    children: [
      {
        path: "my-info",
        element: <div>My Info</div>,
      },
      {
        path: "liked-events",
        element: <div>Liked Events</div>,
      },
    ],
  },
]);
```

> [!IMPORTANT]
> Para renderizar las rutas hijas dentro del componente padre, utiliza el componente `<Outlet />` en el componente padre.

```javascript
import { Outlet } from "react-router";

const Profile = () => {
  return (
    <div>
      Profile
      <Outlet />
    </div>
  );
};

export default Profile;
```

## Conceptos claves

- **Rutas**: Define las rutas de tu aplicación y cómo se asignan a los componentes.

- **Navegación**: Proporciona componentes y hooks para manejar la navegación entre

- **Client Side Routing**: Permite la navegación sin recargar la página.
