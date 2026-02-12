import React, { useEffect, useState } from "react";

import useFetch from "../../hooks/useFetch";
import Error from "./components/Error";
import Loading from "./components/Loading";
import Pokemon from "./components/Pokemon";
import ReactPaginate from "react-paginate";

import styles from "./index.module.css";

import type {
  PokemonListResponse,
  Pokemon as PokemonType,
} from "../../types/pokemon";

const Pokedex: React.FC = () => {
  const [pokemonsDetails, setPokemonsDetails] = useState<PokemonType[]>([]);
  const [isLoadingDetails, setIsLoadingDetails] = useState<boolean>(false);
  const [errorDetails, setErrorDetails] = useState<string | null>(null);
  const [pageCount, setPageCount] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);

  // Agregar la bandera de error y cargando para el detalle de la lista completa de pokemons TODO: Tarea
  // TODO: Agregar paginacion
  const {
    data: pokemonList,
    error,
    loading: isLoadingPokemonList,
  } = useFetch<PokemonListResponse>(
    `https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offset}`,
  );

  const handlePageClick = (event: { selected: number }) => {
    setOffset(event.selected * 50);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (!pokemonList?.results) {
      return;
    }

    setPageCount(Math.ceil(pokemonList.count / 50));

    const fetchPokemonDetails = async (): Promise<void> => {
      try {
        setIsLoadingDetails(true);
        setErrorDetails(null);
        const pokemonDetailsResponse: PokemonType[] = await Promise.all(
          pokemonList?.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return res.json();
          }),
        );

        setPokemonsDetails(pokemonDetailsResponse);
      } catch (err) {
        setErrorDetails("Error al obtener los detalles de los Pokémon");
      } finally {
        setIsLoadingDetails(false);
      }
    };

    fetchPokemonDetails();
  }, [pokemonList?.results]);

  if (error?.length) {
    return <Error msg={error} />;
  }

  if (isLoadingPokemonList) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen p-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap gap-4">
          {pokemonsDetails.map((pokemon, index) => (
            <Pokemon key={`pokemon-${pokemon.name}-${index}`} {...pokemon} />
          ))}
        </div>
      </div>
      {pokemonsDetails && !isLoadingDetails && (
        <ReactPaginate
          className={styles.pagination}
          nextClassName={styles.next}
          previousClassName={styles.pre}
          pageClassName={styles.page}
          activeClassName={styles.activePage}
          disabledClassName={styles.disabledPage}
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          forcePage={offset / 50}
        />
      )}
    </div>
  );
};

export default Pokedex;
