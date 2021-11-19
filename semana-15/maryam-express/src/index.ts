import express, { Request, Response } from "express"
import cors from "cors"
import { countries } from "./data"

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
  console.log("Servidor pronto!")
})

// ENDPOINT DE TESTE
app.get("/test", (req, res) => {
  res.send("Olá do Express")
})

// ENDPOINT DE BUSCAR TODOS OS PAÍSES
app.get("/countries", (req: Request, res: Response) => {
  res.send(countries)
})

// ENDPOINT DE TESTE
app.get("/countries/test", (req, res) => {
  res.send("País das Maravilhas")
})

// ENDPOINT DE BUSCAR PAÍS POR ID
app.get("/countries/:id", (req, res) => {
  const id = req.params.id

  console.log(id)

  const result = countries.find((country) => {
    return country.id === Number(id)
  })

  if (result) {
    res.send(result)
  } else {
    res.status(404).send("País não encontrado")
  }

})

// ENDPOINT DE DELETAR PAÍS
app.delete("/countries/:id", async (req, res) => {
  try {

    const token = req.headers.authorization

    if (!token) {
      res.statusCode = 401
      throw new Error()
    }

    const index = countries.findIndex((country) => {
      return country.id === Number(req.params.id)
    })

    if(index === -1){
      res.statusCode = 404
      throw new Error()
    }

    countries.splice(index, 1)

    res.status(204).end()

  } catch (error: any) {

    if (res.statusCode === 200) {
      res.status(500).end()
    } else {
      res.end()
    }
  }
})
