import { useEffect, useState } from "react";
import { Pokemon } from "../models/Pokemon";
import axios from "axios";
import PokeDexLeds from "./PokeDexLeds";
import PokeDexScreen from "./PokeDexScreen";
import PokeDexInfo from "./PokeDexInfo";

const PokeDex = () => {
  const [query, setQuery] = useState("pikachu");
  const [pokemon, setPokemon] = useState<Pokemon>();
  useEffect(() => {
    let ignore = false;
    const timer = setTimeout(() => {
      const fetchPokemon = async () => {
        const result = await axios.get<Pokemon>(
          `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`,
        );
        if (!ignore) {
          setPokemon(result.data);
        }
      };

      fetchPokemon();
    }, 300);

    return () => {
      clearTimeout(timer);
      ignore = true;
    };
  }, [query]);

  return (
    <div className=" mx-auto flex max-w-lg flex-col gap-4 overflow-hidden rounded-2xl border-4 border-b-8 border-red-900 bg-red-600 p-4">
      <PokeDexLeds />
      <PokeDexScreen pokemon={pokemon} />
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="rounded-lg border-none bg-red-800 text-white"
      />
      <PokeDexInfo pokemon={pokemon} />
    </div>
  );
};

export default PokeDex;
