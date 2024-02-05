import { useState } from "react";
import "./App.css";
import Parent from "./components/Parent";
import { MyContext } from "./contexts/MyContext";

function App() {
  const [myState, setMyState] = useState([{ foo: "Hello", bar: "World" }]);
  return (
    <>
      <MyContext.Provider value={myState}>
        <div className="p-4">
          <Parent />
        </div>
      </MyContext.Provider>
    </>
  );
}

export default App;
