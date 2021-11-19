import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { countries } from "./data";
import { country } from "./types";

const app = express();
app.use(express.json());
app.use(cors());

// Endpoint 1 - Buscar todos os países

app.get("/countries", (req: Request, res: Response) => {
  const result = countries.map((country) => ({
    id: country.id,
    name: country.name,
  }));
  res.status(200).send(result);
});

// Endpoint 2 - Buscar país por id

app.get("/countries/:id", (req, res) => {
  const id = req.params.id;

  res.send(countries[0]);

  const result: country | undefined = countries.find(
    (country) => country.id === Number(req.params.id)
  );

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).send("Not found");
  }
});

// Endpoint 3 - Busca com filtros

app.get("/countries/search", (req, res) => {
  let result: country[] = countries.filter((country) =>
    country.name.includes(req.query.name as string)
  );

  if (req.query.name) {
    result = result.filter((country) =>
      country.name.includes(req.query.name as string)
    );
  }

  if (req.query.capital) {
    result = result.filter((country) =>
      country.capital.includes(req.query.capital as string)
    );
  }

  if (req.query.continent) {
    result = result.filter((country) =>
      country.continent.includes(req.query.continent as string)
    );
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
