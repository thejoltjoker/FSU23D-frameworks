import GrandChild from "./GrandChild";

const Child = () => {
  return (
    <div className="bg-gray-300 p-4">
      <h2>I'm the Child</h2>

      <GrandChild />
    </div>
  );
};

export default Child;
