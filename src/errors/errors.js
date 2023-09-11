function joi(message) {
  return {
    type: "joiError",
    message,
  };
}

function notFound(resource = "Item") {
  return {
    type: "notFound",
    message: `${resource} não foi encontrado`,
  };
}

function cityEquals() {
  return {
    type: "cityEquals",
    message: `As cidades devem ter origem e destino diferentes`,
  };
}

function dateErrorProcessable() {
  return {
    type: "dateErrorProcessable",
    message: `A data não é permitida`,
  };
}

function citiesExist() {
  return {
    type: "citiesExist",
    message: `Cidade já cadastrada`,
  };
}

function cityNotExist() {
  return {
    type: "cityNotExist",
    message: `Cidade não existe`,
  };
}

function passegerNotExist(){
    return {
        type: "passegerNotExist",
        message:`Passageiro não existe`
    }
}

function flightNotExist(){
    return {
        type:"flightNotExist",
        message: `Viagem não existe`
    }
}

function tooManyResults(){
  return {
    type:"tooManyResults",
    message: `Too Many results`
  }
}
export const errors = {
  joi,
  notFound,
  citiesExist,
  cityEquals,
  dateErrorProcessable,
  cityNotExist,
  passegerNotExist,
  flightNotExist,
  tooManyResults
};
