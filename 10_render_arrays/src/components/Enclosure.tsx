import React from "react";
import { Animal } from "../models/Animal";

interface EnclosureProps {
  inhabitedBy: Animal;
  releaseAnimal: (name: string) => void;
}

const Enclosure = (props: EnclosureProps) => {
  const animal = props.inhabitedBy; // Reassign the prop to something that's easier to work with

  // Create a local click handler that calls our function that was passed down through props.
  // The reason we do this instead of just using releaseAnimal() in onClick={} is so that we can pass on the name.
  const handleClick = () => {
    props.releaseAnimal(props.inhabitedBy.name);
  };

  return (
    // Template for our display
    <div className="animal-display">
      <div className="enclosure">
        <span className="animal-emoji">{animal.emoji}</span>
        <span
          className={
            !animal.isReleased
              ? "enclosure-bars"
              : "enclosure-bars translate-y-[100%]"
          }
        ></span>
      </div>

      <h2>{animal.name}</h2>
      <p>Age: {animal.age}</p>
      <button className="button" onClick={handleClick}>
        {!animal.isReleased
          ? `Release ${animal.name}`
          : `The ${animal.name} is free! 🥳`}
      </button>
    </div>
  );
};

export default Enclosure;
