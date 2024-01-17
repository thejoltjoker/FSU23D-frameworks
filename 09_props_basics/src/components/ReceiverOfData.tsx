interface ReceiverOfDataProps {
  myString: string;
  myNumber: number;
  myBool: boolean;
}

const ReceiverOfData = (props: ReceiverOfDataProps) => {
  return (
    <div className="my-class-name">
      <p>{props.myString}</p>
      <p>{props.myNumber}</p>
      <p>{props.myBool ? "Yes" : "No"}</p>
    </div>
  );
};

export default ReceiverOfData;
