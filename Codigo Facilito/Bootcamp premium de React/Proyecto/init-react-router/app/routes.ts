import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("pokemon-detail/:id", "routes/pokemon-detail.tsx"),
    // Auth routes Agregamos un nuevo layout para las rutas de autenticación Asesoría 5
    route("login", "routes/auth/login.tsx"),    
    route("Sign-up", "routes/auth/sign-up.tsx"),
  ]),
] satisfies RouteConfig;
