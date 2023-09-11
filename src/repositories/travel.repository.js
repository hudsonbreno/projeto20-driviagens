import { db } from "../config/db.connection.js";

async function createPassengers(firstName, lastName) {
  await db.query(
    `INSERT INTO passengers (firstname, lastname) VALUES ($1, $2);`,
    [firstName, lastName]
  );
}

async function createCities(name) {
  await db.query(`INSERT INTO cities (name) VALUES ($1);`, [name]);
}

async function createFlights(origin, destination, data) {
  await db.query(
    `INSERT INTO flights (origin,destination, data) VALUES ($1,$2,$3)`,
    [origin, destination, data]
  );
}

async function createTravels(passengerid, flightid) {
  await db.query(`INSERT INTO travels (passegerid,flightid) VALUES ($1)`, [
    passengerid,
    flightid,
  ]);
}

async function getPassenger(passengerid) {
  const result = await db.query(`SELECT * FROM passengers WHERE id = ($1)`, [
    passengerid,
  ]);
  return result.rows[0];
}

async function getCities(city) {
  const result = await db.query(`SELECT * FROM cities WHERE id = ($1);`, [
    city,
  ]);
  return result.rows[0];
}

async function getFlight(id) {
  const result = await db.query(`SELECT * FROM travels WHERE id=$1;`, [id]);
  return result.rows[0];
}

async function getFlights() {
  const result = await db.query(`
  SELECT
  f.id,
  f.data,
  origin_city.name AS origin_city_name,
  destination_city.name AS destination_city_name
FROM
  flights AS f
INNER JOIN
  cities AS origin_city ON f.origin = origin_city.id
INNER JOIN
  cities AS destination_city ON f.destination = destination_city.id
ORDER BY
  f.data;
`);
  return result;
}

async function getTravelsPassagers(name) {
  const result = await db.query(`
  SELECT
  CONCAT(p.firstname, ' ', p.lastname) AS passenger,
  COUNT(t.id) AS travels
FROM
  passengers AS p
LEFT JOIN
  travels AS t ON p.id = t.passengerid
GROUP BY
  passenger
ORDER BY
  travels DESC;
`);
  return result;
}

const travelRepository = {
  createPassengers,
  createCities,
  createFlights,
  createTravels,
  getPassenger,
  getCities,
  getFlight,
  getFlights,
  getTravelsPassagers,
};

export default travelRepository;
