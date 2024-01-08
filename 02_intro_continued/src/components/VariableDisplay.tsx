import { useState } from "react";

export const VariableDisplay = () => {
  const [value, setValue] = useState(0);
  const numbers = [1, 1, 2, 3, 5, 8, 13];
  const lis = numbers.map((n) => (
    <li className="text-center p-2 font-bold uppercase text-lg text-slate-800">
      {n}
    </li>
  ));
  return (
    <div className="bg-white mx-auto max-w-lg w-full rounded-lg p-4 drop-shadow-lg border border-slate-200">
      <h2 className="font-bold text-4xl text-slate-800">My List</h2>
      <ul>{lis}</ul>
    </div>
  );
};
