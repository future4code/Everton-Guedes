import express, { Request, response, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users } from "./data";
import { User } from "./types";
import e from "express";

const app = express();
app.use(express.json());
app.use(cors());

// Exercício 1

// a. Qual método HTTP você deve utilizar para isso?*

// Deve ser utilizado o método GET

// b. Como você indicaria a entidade que está sendo manipulada?

// ("/users")

app.get("/users", (req, res) => {
  let codeError: number = 400;
  try {
    const name: string = req.query.name as string;
    const user: User | undefined = users.find((user) => user.name === name);
    if (!user) {
      codeError = 404;
      throw new Error("User not found");
    }
    res.status(200).send(user);
  } catch (error: any) {
    res.status(codeError).send({ message: error.message });
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
