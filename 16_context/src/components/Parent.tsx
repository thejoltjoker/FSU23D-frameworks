import Child from "./Child";

const Parent = () => {
  return (
    <div className="bg-gray-400 p-4">
      <h1>I'm the parent</h1>

      <Child />
    </div>
  );
};

export default Parent;
