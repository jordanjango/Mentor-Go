import { Request, Response } from "express";
//This file will only have the controller logic for the user
import userModel from "../models/userModel";
const isValidEmail = (email: string) => {
  //Regex for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

//This controller will be used to register a new user!
export const registerUser = async (req: Request, res: Response) => {
  //Get the name,email and password from the request body.
  const { name, email, password } = req.body;
  //Check if the fields are empty
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please enter all the fields" });
  }
  //validate if the email is valid
  if (!isValidEmail(email)) {
    return res.status(400).json({ message: "Please enter a valid email" });
  }


  const user = {
    name,
    email,
    password,
  };

  const newUser = new userModel(user);
  //Now we will save the user inside the database
  //save the user in the database
  await newUser.save();
  return res.status(200).json({ message: "User registered successfully" });
};
