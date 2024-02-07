import express, { Request, Response } from "express";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
