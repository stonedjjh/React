import type { Route } from "../+types/root";
import PokemonDetail from "~/pages/pokemon-detail";

export const meta = ({}: Route.MetaArgs) => {
   return [
    {title: "Pokedex - Detail"},
    {name: "description", content: "Detalle de pokemon"},
   ];
}

export default function PokemonDetailRoute({params}: Route.ComponentProps){
  return <PokemonDetail id={params?.id || ''}/>;
}
