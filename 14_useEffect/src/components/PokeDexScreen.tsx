import { Pokemon } from "../models/Pokemon";

interface PokeDexScreenProps {
  pokemon: Pokemon | undefined;
}

const PokeDexScreen = (props: PokeDexScreenProps) => {
  return (
    <div className="aspect-[4/3] w-full rounded-lg bg-gray-200 p-8">
      <div className="flex h-full w-full items-center overflow-hidden rounded-md bg-gray-800 object-cover p-16">
        <img
          src={
            props.pokemon?.sprites?.other?.["official-artwork"].front_default ??
            props.pokemon?.sprites?.front_default
          }
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
};

export default PokeDexScreen;
