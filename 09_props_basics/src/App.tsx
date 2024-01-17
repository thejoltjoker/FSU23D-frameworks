import "./App.css";
import ReceiverOfData from "./components/ReceiverOfData";

function App() {
  return (
    <>
      <ReceiverOfData myString="Hello world" myNumber={2} myBool={true} />
    </>
  );
}

export default App;
