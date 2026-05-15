// Archivo agregado Asesoría 5
import  SignUp  from "../../pages/auth/Sign-Up";
import type {Route} from "./+types/sign-up"
export function meta({}: Route.MetaArgs) {
  return [
    // Aqui se configura el titulo de la pagina y su meta descripción
    { title: "Pokedex - Sign Up" },
    { name: "description", content: "Sign Up to continue.." },
  ];
}

export default function Home() {
  return <SignUp />;
}