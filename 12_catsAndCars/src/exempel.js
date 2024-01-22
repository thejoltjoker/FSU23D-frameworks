// const myFunction = () => {
//   return ["Maria", "Nystrom", "David", "Lindestrom"];
// };

// const response = myFunction();

// console.log(response);

// // const firstName = response[0];
// // const lastName = response[1];

// const [firstName, lastName] = response;

// console.log(firstName, lastName);

// class Tool{
//   constructor(
//     public weight: number,
//     public name: string
//   ){  }
// }

// interface Tool{
//   weight: number;
//   string: string;
// }

// type Tool = {
//   weight: number;
//   string: string;
// }

// {weight: 12, name: "hammer"}

const useState = (initialValue) => {
  let value = initialValue;

  const setValue = (newValue) => {
    value = newValue;
  };

  return [value, setValue];
};

const [tool, setTool] = useState("hammare");

console.log(tool);

setTool("Skruvmejsel");

console.log(tool); // Skruvmejsel















const myFunction2 = () => {
  return { firstName: "Maria", lastName: "Nystrom" };
};

const response2 = myFunction2();

console.log(response2);

// const firstName = response2.firstName;
// const lastName = response2.lastName;

const {firstName, lastName} = response2;

console.log(firstName, lastName);
