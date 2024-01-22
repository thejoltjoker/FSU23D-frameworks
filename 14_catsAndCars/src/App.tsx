import { useState } from "react";
import { Car } from "./models/Car";
import CarList from "./components/CarList";

function App() {
  const [cars, setCars] = useState<Car[]>([
    new Car(1, "Volvo", 1998, "Red", 90),
    new Car(2, "BMW", 4921, "Blue", 120),
    new Car(3, "Mustang", 1700, "Yellow", 200),
  ]);

  const upgradeTopSpeed = (carId: number, newTopSpeed: number) => {
    console.log(carId, newTopSpeed);
    const newCars = cars.map((car) => {
      if (car.id === carId) {
        car.topSpeed = newTopSpeed;
        return car;
      }
      return car;
    });
    setCars([...newCars]);
  };

  return (
    <>
      <section id="cat-section">Cats 🐈</section>

      <section id="car-section">
        Cars
        <CarList cars={cars} onUpgradeClick={upgradeTopSpeed} />
      </section>
    </>
  );
}

export default App;
