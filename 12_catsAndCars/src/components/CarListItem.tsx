import { Car } from "../models/Car";

interface CarListItemProps {
  car: Car;
  onUpgradeClick: (carId: number, newTopSpeed: number) => void;
}

const CarListItem = (props: CarListItemProps) => {
  const handleClick = () => {
    const newTopSpeed = props.car.topSpeed * 2;
    props.onUpgradeClick(props.car.id, newTopSpeed);
  };

  return (
    <li key={props.car.id} className="inline-flex gap-2 items-center">
      <p className="font-bold">{props.car.brand}</p>
      <p>{props.car.year}</p>
      <p>{props.car.color}</p>
      <p>{props.car.topSpeed}</p>
      <button className="bg-orange-500 rounded-lg p-2" onClick={handleClick}>
        Upgrade
      </button>
    </li>
  );
};

export default CarListItem;
