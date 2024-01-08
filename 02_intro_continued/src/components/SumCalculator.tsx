import { useState } from "react";
import "./SumCalculator.css";

export const SumCalculator = () => {
  const [sum, setSum] = useState(0);
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);

  const addNumbers = () => {
    const result = Number(numberOne) + Number(numberTwo);
    setSum(result);
  };

  return (
    <div className="bg-white mx-auto max-w-lg w-full rounded-lg p-4 drop-shadow-lg border border-slate-200">
      <div className="text-center p-10 font-bold uppercase text-6xl text-slate-800">
        {sum}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input
          type="number"
          value={numberOne}
          onChange={(e) => setNumberOne(Number(e.target.value))}
        />
        <input
          type="number"
          value={numberTwo}
          onChange={(e) => setNumberTwo(Number(e.target.value))}
        />

        <button
          className="bg-blue-500 rounded-lg py-2 px-16 text-white max-w-sm mx-auto col-span-full hover:bg-blue-600 transition border border-blue-600 hover:border-blue-700"
          onClick={addNumbers}
        >
          Add
        </button>
      </div>
    </div>
  );
};
