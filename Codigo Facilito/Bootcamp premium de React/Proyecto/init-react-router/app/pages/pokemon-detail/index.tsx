import { useNavigate } from "react-router";
import useFetch from "~/hooks/useFetch";
import type { Pokemon } from "~/types/pokemon";

const typeColors: Record<string, string> = {
  normal: "bg-gray-400",
  fire: "bg-red-500",
  water: "bg-blue-500",
  electric: "bg-yellow-400",
  grass: "bg-green-500",
  ice: "bg-cyan-300",
  fighting: "bg-orange-700",
  poison: "bg-purple-500",
  ground: "bg-yellow-700",
  flying: "bg-indigo-300",
  psychic: "bg-pink-500",
  bug: "bg-lime-500",
  rock: "bg-stone-600",
  ghost: "bg-indigo-800",
  dragon: "bg-indigo-600",
  dark: "bg-zinc-800",
  steel: "bg-slate-400",
  fairy: "bg-pink-300",
};

export default function PokemonDetail({ id }: { id: string }) {
  const navigate = useNavigate();
  const {
    data: pokemon,
    loading: loadingPokemon,
    error: errorPokemon,
  } = useFetch<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const {
    data: pokemonSpecies,
    loading: loadingPokemonSpecies,
    error: errorPokemonSpecies,
  } = useFetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);

  if (loadingPokemon || loadingPokemonSpecies || !pokemon) {
    return <div>Cargando...</div>;
  }

  if (errorPokemon || errorPokemonSpecies) {
    return <div>Error</div>;
  }

  const bgColor = typeColors[pokemon.types[0].type.name];

  const description = pokemonSpecies?.flavor_text_entries?.find(
    (entry:any) =>
        entry.language.name === "es" ,
  )?.flavor_text.replace(/[\x00-\x1f\x7f-\x9f]/g, " ");
  
  return (
    <div className="mx-auto max-w-4xl p-4 sm:p-6 lg:p-8 animate-in fade-in duration-500">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 flex items-center gap-2 text-gray-600 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:-translate-x-1 transition-transform"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        <span>Volver a la Pokedex</span>
      </button>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        {/* Card Left - Image & Basic Info */}
        <div className="md:col-span-5">
          <div
            className={`relative overflow-hidden rounded-3xl ${bgColor} p-8 shadow-xl`}
          >
            {/* Background Accent */}
            <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-white/20 blur-3xl"></div>

            <div className="relative z-10">
              <div className="flex justify-between items-start text-white">
                <h1 className="text-4xl font-black capitalize tracking-tight">
                  {pokemon.name}
                </h1>
                <span className="text-2xl font-bold opacity-70">
                  #{String(pokemon.id).padStart(3, "0")}
                </span>
              </div>

              <div className="mt-4 flex gap-2">
                {pokemon.types.map(({ type }) => (
                  <span
                    key={type.name}
                    className="rounded-full bg-white/20 px-4 py-1 text-sm font-semibold capitalize text-white backdrop-blur-md"
                  >
                    {type.name}
                  </span>
                ))}
              </div>

              <img
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt={pokemon.name}
                className="mx-auto mt-6 h-64 w-64 transform drop-shadow-2xl transition-transform hover:scale-105"
              />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-gray-50 p-4 dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Peso
              </p>
              <p className="mt-1 text-xl font-bold text-gray-800 dark:text-gray-100">
                {pokemon.weight / 10} kg
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-4 dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Altura
              </p>
              <p className="mt-1 text-xl font-bold text-gray-800 dark:text-gray-100">
                {pokemon.height / 10} m
              </p>
            </div>
          </div>
        </div>

        {/* Card Right - Details & Stats */}
        <div className="md:col-span-7 space-y-8">
          <section>
            <h2 className="mb-3 text-2xl font-bold text-gray-800 dark:text-gray-100">
              Sobre este Pokémon
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              {description ||
                "No hay información disponible para este Pokémon."}
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-100">
              Estadísticas Base
            </h2>
            <div className="space-y-4">
              {pokemon.stats.map((stat) => (
                <div key={stat.stat.name}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="font-bold uppercase tracking-tight text-gray-500 dark:text-gray-400">
                      {stat.stat.name.replace("-", " ")}
                    </span>
                    <span className="font-black text-gray-800 dark:text-gray-200">
                      {stat.base_stat}
                    </span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${bgColor}`}
                      style={{
                        width: `${Math.min(100, (stat.base_stat / 150) * 100)}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-gray-800 dark:text-gray-100">
              Habilidades
            </h2>
            <div className="flex flex-wrap gap-3">
              {pokemon.abilities.map(({ ability }) => (
                <span
                  key={ability.name}
                  className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-bold capitalize text-gray-700 shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
                >
                  {ability.name.replace("-", " ")}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
