import travelService from "../services/travel.services.js"
import httpsStatus from "http-status"

async function health(req,res){
    res.sendStatus(200)
}

async function createPassengers(req, res){
    const { firstName, lastName } = req.body

    await travelService.createPassengers(firstName, lastName)
    res.sendStatus(httpsStatus.CREATED)
}

async function createCities(req, res) {
    const { name } = req.body

    const cities = await travelService.createCities(name)
    res.sendStatus(httpsStatus.CREATED)
}

async function createFlights(req, res, next) {
    try{
        const { origin, destination,date } = req.body
        const flights = await travelService.createFlights(origin, destination, date)
        
        res.status(httpsStatus.CREATED).send(`Voo criado`)
    }
    catch(error) {
        next(error);
    }

}

async function createTravels(req,res) {
    const { passengerId,flightId} = req.body

    const travels = await travelService.createTravels(passengerId,flightId)
    res.status(httpsStatus.CREATED).send(`Viagem Criada`)
}

async function getFlights(req, res) {
    const origin = req.query.origin
    const destination = req.query.destination
    const smaller_date = req.query['smaller-date']
    const bigger_date = req.query['bigger-date']

    const Flights = await travelService.getFlights(origin, destination, bigger_date, smaller_date)
    res.status(httpsStatus.OK).send(Flights)
}

async function getTravelsPassagers(req, res) {
    const name = req.query.name

    const travelsPassagers = await travelService.getTravelsPassagers()
    res.status(httpsStatus.OK).send(travelsPassagers)
}

const travelController = { health,
    createPassengers,
    createCities,createFlights,
    createTravels,
    getFlights,
    getTravelsPassagers 
}

export default travelController;