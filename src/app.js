import express from "express"
import "express-async-errors"
import dotenv from "dotenv"
import travelRouter from "./routes/travel.routes.js"
import { errorHandler } from "./middlewares/errorHandler.js"
dotenv.config()

const app = express()
app.use(express.json())
app.use(travelRouter)
app.use(errorHandler)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Servidor na porta ${port}`);
  });