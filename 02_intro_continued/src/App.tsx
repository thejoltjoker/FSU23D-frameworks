import "./App.css";
import { SumCalculator } from "./components/SumCalculator";
import { VariableDisplay } from "./components/VariableDisplay";

function App() {
  return (
    <div className="h-full w-full flex flex-col gap-4 p-4 items-center bg-slate-100">
      <SumCalculator />
      <VariableDisplay />
    </div>
  );
}

export default App;
