import { useMyContext } from "../contexts/MyContext";

const GrandChild = () => {
  const myContext = useMyContext();
  return (
    <div className="bg-gray-200 p-4">
      <h3>I'm the GrandChild</h3>
      <ul>
        Context:{" "}
        {myContext.map((item) => (
          <li>
            {item.foo} {item.bar}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GrandChild;
