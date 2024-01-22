import { Car } from "../models/Car";
import CarListItem from "./CarListItem";

interface CarListProps {
  cars: Car[];
  onUpgradeClick: (carId: number, newTopSpeed: number) => void;
}
export const CarList = (props: CarListProps) => {
  return (
    <ul className="flex flex-col gap-2">
      {props.cars.map((car) => {
        return <CarListItem key={car.id} car={car} onUpgradeClick={props.onUpgradeClick}/>;
      })}
    </ul>
  );
};

export default CarList;
