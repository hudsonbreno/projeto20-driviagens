import { Router } from "express";
import travelController from "../controllers/travel.controller.js";
import schemaValidation from "../middlewares/shcemaValidation.js";
import travelSchema from "../schemas/travel.schema.js";

const travelRouter = Router()

travelRouter.get("/health", travelController.health)
travelRouter.post("/passengers", travelController.createPassengers)
travelRouter.post("/cities",schemaValidation(travelSchema.citiesSchema), travelController.createCities)
travelRouter.post("/flights", schemaValidation(travelSchema.flightsSchema), travelController.createFlights)
travelRouter.post("/travels", schemaValidation(travelSchema.travelObjectSchema), travelController.createTravels)
travelRouter.get("/flights", travelController.getFlights)
travelRouter.get("/passengers/travels", travelController.getTravelsPassagers)

export default travelRouter