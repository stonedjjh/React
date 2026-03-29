import type { FC } from "react";
import type { Pokemon } from "~/types/pokemon";

import { Link } from "react-router";

const PokemonItem: FC<Pokemon> = ({
  id,
  sprites,
  name,
  height,
  weight,
  base_experience,
}) => (
  <div className="bg-white rounded-lg">
    <Link to={`/pokemon-detail/${id}`}>
      <div className="p-6 relative cursor-pointer hover:opacity-80 transition-all">
        <img
          src={sprites.other["official-artwork"].front_default}
          alt={name}
          className="w-full h-48 object-contain"
        />
      </div>
    </Link>
    <div className="p-4">
      <div>
        <h3 className="text-xl font-bold capitalize text-gray-800">{name}</h3>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
        <div>
          <p className="text-xs text-gray-500">Altura</p>
          <p className="font-semibold text-gray-800">{height / 10}m</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Peso</p>
          <p className="font-semibold text-gray-800">{weight / 10}kg</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">XP Base</p>
          <p className="font-semibold text-gray-800">{base_experience}</p>
        </div>
      </div>
    </div>
  </div>
);

export default PokemonItem;
