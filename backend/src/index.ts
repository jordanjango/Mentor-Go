import express, { Request, Response } from "express";
import dbConnect from "./config/dbConnect";
import dotenv from "dotenv";
const app = express();
const port = process.env.PORT || 3000;
const dotenvConfig = dotenv.config({ path: "backend/.env" });
//Connect MongoDb and create the clusters now.
dbConnect();
//Check the API health by using a GET API.
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});
//Listen to the given PORT.
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
