import { Pokemon } from "../models/Pokemon";

interface PokeDexInfoProps {
  pokemon: Pokemon | undefined;
}

const PokeDexInfo = (props: PokeDexInfoProps) => {
  return (
    <div className="grid grid-cols-[fit-content(8ch),_minmax(0,_1fr)] rounded-lg border-2 border-lime-800 bg-lime-600 p-4 font-mono text-sm text-lime-950">
      <p className="pr-2">Name:</p>
      <p>{props.pokemon?.name}</p>
      <p className="pr-2">Weight:</p>
      <p>{props.pokemon?.weight}</p>
      <p className="pr-2">Species:</p>
      <p>{props.pokemon?.species?.name}</p>
    </div>
  );
};

export default PokeDexInfo;
