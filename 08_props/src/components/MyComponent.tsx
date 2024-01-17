import { MyClass } from "../models/MyClass";

interface MyComponentProps {
  obj: MyClass;
}

const MyComponent = (props: MyComponentProps) => {
  return (
    <div>
      <h1>{props.obj.foo}</h1>
      <p>{props.obj.bar}</p>
    </div>
  );
};

export default MyComponent;
