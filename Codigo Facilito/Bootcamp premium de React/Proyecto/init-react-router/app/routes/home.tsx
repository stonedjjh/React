import type { Route } from "./+types/home";
import { Welcome } from "../pages/welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    // Aqui se configura el titulo de la pagina y su meta descripción
    { title: "Pokedex - Home" },
    { name: "description", content: "Welcome to Pokedex!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
