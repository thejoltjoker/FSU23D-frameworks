import express, { Request, Response } from "express";

const app = express();
const port = 3000;

class MyObject {
  constructor(public field1: string, public field2: string) {}
}
app.get("/data", (request: Request, response: Response) => {
  const myData: MyObject = {
    field1: "hello",
    field2: "world",
  };

  response.json(myData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
