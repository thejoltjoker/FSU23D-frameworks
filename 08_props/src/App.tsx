import "./App.css";
import MyComponent from "./components/MyComponent";
import { MyClass } from "./models/MyClass";

function App() {
  const myObject = new MyClass("Hello", "World");
  return (
    <>
      <MyComponent obj={myObject} />
    </>
  );
}

export default App;
