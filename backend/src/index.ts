import express, { Request, Response } from "express";
import dbConnect from "./config/dbConnect";
import userRoute from './routes/userRoute';

//Create an express app
const app = express();
const port = process.env.PORT || 3000;

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

//Routes
app.use(express.json())
app.use("/api/user", userRoute);