import { useState } from "react";
import Zoo from "./components/Zoo";
import { Animal } from "./models/Animal";

function App() {
  // Create a new state that we can use to store the animals.
  // useState returns an array of two elements.
  // The first is our state value, and the second is a function to set the value of the state.
  const [zooAnimals, setZooAnimals] = useState<Animal[]>([
    new Animal("Lion", 5, "🦁", false),
    new Animal("Penguin", 2, "🐧", false),
    new Animal("Elephant", 10, "🐘", false),
    new Animal("Snake", 1, "🐍", false),
    new Animal("Dolphin", 8, "🐬", false),
    new Animal("Brachiosaurus", 65000000, "🦕", false),
  ]);

  // The data in zooAnimals will look like this:
  // [
  //   {
  //     "name": "Lion",
  //     "age": 5,
  //     "emoji": "🦁",
  //     "isReleased": false
  //   },
  //   {
  //     "name": "Penguin",
  //     "age": 2,
  //     "emoji": "🐧",
  //     "isReleased": false
  //   },
  //   {
  //     "name": "Elephant",
  //     "age": 10,
  //     "emoji": "🐘",
  //     "isReleased": false
  //   },
  //   {
  //     "name": "Snake",
  //     "age": 1,
  //     "emoji": "🐍",
  //     "isReleased": false
  //   },
  //   {
  //     "name": "Dolphin",
  //     "age": 8,
  //     "emoji": "🐬",
  //     "isReleased": false
  //   }
  // ]

  // We create this function in order to update our state (zooAnimals)
  // In particular we want to update the isReleased property on the animal
  // Let's break down the following code
  const handleAnimalRelease = (name: string): void => {
    // The row above assigns an arrow function to the variable handleAnimalRelease.
    // void <- just tells us what the function returns, in this case nothing aka void

    // Now we use our state "setter" to update the array of animals
    setZooAnimals(
      // We use Array.map() to go through each animal and only update the property on the one we want to release.
      zooAnimals.map((animal): Animal => {
        // The reason for the double animal above is because
        // (animal) <- is the variable we want to assign to each object in the array as we go through it
        // (...): Animal <- is just to tell typescript what type of object we expect our variable to be.

        // To determine which animal to update we use the name property on the animal object.
        if (animal.name === name) {
          // Here we use the { ...spread } syntax to create a new object with the same values as our existing one
          // The rease we don't just do animal.isReleased = true is because that won't update the state,
          // Which means our components won't re-render aka we won't see the changes in our ui.
          return { ...animal, isReleased: true };
        } else {
          // If the name doesn't match we don't need to update that object so we just return it as is.
          return animal;
        }
      }),
    );
  };

  return (
    <>
      {/* Now we pass our zoo animals down as a prop to our Zoo component */}
      {/* The releaseAnimal prop is the function we use to update our state */}
      <Zoo animals={zooAnimals} releaseAnimal={handleAnimalRelease} />
    </>
  );
}

export default App;
