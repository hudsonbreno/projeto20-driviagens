import { errors } from "../errors/errors.js";
import dayjs from "dayjs";
import travelRepository from "../repositories/travel.repository.js";

async function createPassengers(firstName, lastName) {
  await travelRepository.createPassengers(firstName, lastName);
}

async function createCities(name) {
  await travelRepository.createCities(name);
}

async function createFlights(origin, destination, date) {
    const dataAtual = dayjs();
    
    const existCity1 = await travelRepository.getCities(origin);
    if (!existCity1) throw errors.cityNotExist();

    const existCity2 = await travelRepository.getCities(destination);
    if (!existCity2) throw errors.cityNotExist();

    if(existCity2.id == existCity1.id) throw errors.cityEquals();
    
    if(dataAtual.isAfter(date)) throw errors.dateErrorProcessable()
   
    await travelRepository.createFlights(origin, destination, date);
}

async function createTravels(passengerId, flightId) {
    const passegerExist = await travelRepository.getPassenger(passengerId);
    if(!passegerExist) throw errors.passegerNotExist();
    
    const flightExist = await travelRepository.getFlight(flightId)
    if(!flightExist) throw errors.flightNotExist();

    await travelRepository.createFlights(passengerId, flightId);
}

async function getFlights(origin, destination, bigger_date, smaller_date) {
  const result = await travelRepository.getFlights();

  return result.rows;
}

async function getTravelsPassagers(name) {

  const result = await travelRepository.getTravelsPassagers();
  if(result.rowCount>10) throw errors.tooManyResults();

  return result.rows;
}

const travelService = {
  createPassengers,
  createCities,
  createFlights,
  createTravels,
  getFlights,
  getTravelsPassagers,
};

export default travelService;
