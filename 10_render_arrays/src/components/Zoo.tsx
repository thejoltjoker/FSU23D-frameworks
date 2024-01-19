import { Animal } from "../models/Animal";
import Enclosure from "./Enclosure";

interface ZooProps {
  animals: Animal[];
  releaseAnimal: (name: string) => void; // We match the arrow function that we created in App.tsx to get the correct type
}

const Zoo = (props: ZooProps) => {
  return (
    <>
      <h1>The Nice Zoo</h1>
      <div className="zoo">
        {/* Once again we use map to iterate over each animal, but this time to create a display component for each */}
        {props.animals.map((animal) => {
          return (
            <Enclosure
              inhabitedBy={animal}
              releaseAnimal={props.releaseAnimal}
            />
          );
        })}
      </div>
    </>
  );
};

export default Zoo;
