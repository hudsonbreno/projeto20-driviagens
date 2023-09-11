import httpStatus from "http-status";

export function errorHandler(error, req, res, next) {
  console.log(error);

  if (error.code === "23505" && error.constraint === "unique_city_name") {
    return res.status(httpStatus.CONFLICT).send("A cidade já foi adicionada");
  }

  if (error.type == "cityNotExist") {
    return res.status(httpStatus.NOT_FOUND).send(error.message);
  }

  if (error.type == "cityEquals") {
    return res.status(httpStatus.CONFLICT).send(error.message);
  }

  if (error.type == "dateErrorProcessable") {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
  }
  if (error.type == "passegerNotExist"){
    return res.status(httpStatus.NOT_FOUND).send(error.message);
  }
  if(error.type == "flightNotExist"){
    return res.status(httpStatus.NOT_FOUND).send(error.message)
  }
  if (error.type === "joiError") {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
  }
  if (error.type === "notFound") {
    return res.status(httpStatus.NOT_FOUND).send(error.message);
  }
  if(error.type === "tooManyResults"){
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }

  return res
    .status(httpStatus.INTERNAL_SERVER_ERROR)
    .send("Ocorreu um erro desconhecido");
}
