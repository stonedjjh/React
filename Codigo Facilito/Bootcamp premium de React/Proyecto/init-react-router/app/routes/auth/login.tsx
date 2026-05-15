// Archivo agregado Asesoría 5
import  Login  from "../../pages/auth/login";
import type {Route} from "./+types/login"
export function meta({}: Route.MetaArgs) {
  return [
    // Aqui se configura el titulo de la pagina y su meta descripción
    { title: "Pokedex - Login" },
    { name: "description", content: "Login to continue.." },
  ];
}

export default function Home() {
  return <Login />;
}