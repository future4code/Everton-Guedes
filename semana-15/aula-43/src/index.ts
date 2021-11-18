import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { countries } from "./data";
import { country } from "./types";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/countries", (req: Request, res: Response) => {
  res.send(countries);
  console.log(countries);
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
