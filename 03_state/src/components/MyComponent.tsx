import { useState } from "react";

export const MyComponent = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="text-center">
      <h1 className="text-8xl font-light my-10 text-slate-800">{counter}</h1>
      <button
        className="bg-sky-400 rounded-lg text-slate-800 font-bold px-4 py-2"
        onClick={() => setCounter(counter + 1)}
      >
        Count
      </button>
    </div>
  );
};
